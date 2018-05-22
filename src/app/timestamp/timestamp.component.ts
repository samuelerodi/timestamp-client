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
  //
  public file$: File;
  public warnings:string[]=[];
  //
  public onFileDrop(files: FileList) {
    var f =this.meetFileRequirements(files);
    if (!f) return;
    this.file$ = this.createFileBase(f);
    console.log('File Uploaded: ', this.file$);
    this.verifyFile(this.file$);
  }

  public meetFileRequirements(files: FileList){
    //   this.warnings=[];
    //   this.files = event.files;
    //   if (this.files.length>1) this.warnings.push('Max one file at a time allowed.');
    //   if (!this.files[0].fileEntry.isFile) {
    //     this.warnings.push('Only system files allowed.');
    //     return;
    //   }
    //   const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
    //   fileEntry.file((file: File) => {
    //     this.file=file;
    //     // Here you can access the real file
    //     console.log("The file contains:", file);
    //
    //   });
    //   // It was a directory (empty directories are added, otherwise only files)
    //   // const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
    //   // console.log(droppedFile.relativePath, fileEntry);
    return files[0];
  }
  public createFileBase(f:any){
    f.hash = CryptoJS.SHA256(f.name).toString(CryptoJS.enc.Hex);
    return f;
  }
  public verifyFile(f:any){
    return this.http
    .get(API_PROOF, {params: {"hash":f.hash}})
    .subscribe(data => _.merge(f, data),
    (e: HttpErrorResponse) => {
      if (e.status==404) _.merge(f, {committed: false, status:'NOT STAMPED'})
    });
  }
  public stampFile(f:any){
    return this.http
    .post(API_PROOF, {"hash":f.hash})
    .subscribe(data => _.merge(f, data));

  }
  public onFileOver(e:any){}
  public onFileLeave(event){}

}
