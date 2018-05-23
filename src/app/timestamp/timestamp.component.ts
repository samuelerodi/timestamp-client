import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ComponentsService } from '../../services/components.service';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import * as _ from 'lodash';
import * as CryptoJS from 'crypto-js';

const API_PROOF = 'https://ts.pub.blockchaincc.tk/api/v1.1/proof';

@Component({
  selector: 'timestamp',
  styleUrls: [ './timestamp.component.css' ],
  templateUrl: './timestamp.component.html',
  providers:[]
})
export class TimestampComponent {

  constructor(public components: ComponentsService, private http:HttpClient) {
      components.apply({
       navbar: {visible : false},
       footer: {visible : false}
      });
  }
  public verifying:Observable<any>;
  public stamping:Observable<any>;
  public file$: File;
  public warnings:string[]=[];

  public onFileDrop(files: FileList) {
    var f = this.meetFileRequirements(files);
    if (!f) return;
    this.verifying=this.createFileBase(f).subscribe((r)=>{
      this.file$=r;
      return Observable.of(this.verifyFile(this.file$));
    });
  }

  public meetFileRequirements(files: FileList){
      this.warnings=[];
      if (files.length>1) {
        this.warnings.push('Max one file at a time allowed.');
        return;
      }
      // var f = files[0].fileEntry as FileSystemFileEntry;
      // if (!files[0].fileEntry.isFile) {
      //   this.warnings.push('Only system files allowed.');
      //   return;
      // }
    //   // It was a directory (empty directories are added, otherwise only files)
    //   // const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
    //   // console.log(droppedFile.relativePath, fileEntry);
    return files[0];
  }
  public createFileBase(f:File){
    return Observable.create(function (observer) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        let d:any = f;
        d.hash = CryptoJS.SHA256(fileReader.result).toString(CryptoJS.enc.Hex);
        observer.next(d);
        observer.complete();
      }
      fileReader.readAsBinaryString(f);
    });
  }
  public verifyFile(f:any){
    return this.http
    .get(API_PROOF, {params: {"hash":f.hash}})
    .subscribe(
      (data) => {_.merge(f, data);},
      (e: HttpErrorResponse) => {
      if (e.status==404) _.merge(f, {committed: false, status:'NOT STAMPED'});
    });
  }
  public stampFile(f:any){
    this.stamping = this.http
      .post(API_PROOF, {"hash":f.hash});
    return this.stamping.subscribe(data => _.merge(f, data));
  }
  public onFileOver(e:any){}
  public onFileLeave(event){}

}
