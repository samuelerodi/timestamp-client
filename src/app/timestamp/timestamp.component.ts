import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx'
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
  public verifying$:Observable<any>;
  public stamping$:Observable<any>;
  public generating$:Observable<any>;
  public file$: File;
  public warnings:string[]=[];

  public onFileDrop(files: FileList) {
    var f = this.meetFileRequirements(files);
    if (!f) return;
    this.generateFile(f)
    .flatMap((r)=>this.verifyFile(r))
    .subscribe();
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
  public generateFile(f:File):Observable<any>{
    return this.generating$ = Observable.create((observer)=>{
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.file$ = <any>f;
        this.file$.hash = CryptoJS.SHA256(fileReader.result).toString(CryptoJS.enc.Hex);
        observer.next(this.file$);
        observer.complete();
      }
      fileReader.readAsBinaryString(f);
    });
  }
  public verifyFile(f:any):Observable<any>{
    return this.verifying$ = this.http
      .get(API_PROOF, {params: {"hash":f.hash}})
      .map(data => _.merge(f, data))
      // .catch((e) => {return _.merge(f, {committed: false, status:'NOT STAMPED'});});

  }
  public stampFile(f:any):Observable<any>{
    return this.stamping$ = this.http
      .post(API_PROOF, {"hash":f.hash})
      .map(data => _.merge(f, data));
  }
  public onFileOver(e:any){}
  public onFileLeave(event){}

}
