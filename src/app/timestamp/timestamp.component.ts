import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentsService } from '../../services/components.service';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'timestamp',
  styleUrls: [ './timestamp.component.css' ],
  templateUrl: './timestamp.component.html',
  providers:[]
})
export class TimestampComponent {

  constructor( public route: ActivatedRoute, public components: ComponentsService) {
      components.apply({
       navbar: {visible : false},
       footer: {visible : false}
      });
  }
  //
  public file: File;
  // public warnings:string[]=[];
  //
  public onFileDrop(files: FileList) {
    this.file=files[0];
  console.log('File Uploaded: ', files)
  //   this.warnings=[];
  //   this.file=undefined;
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
  }

  public fileOver:boolean = false;

  public onFileOver(e:any){
    this.fileOver=e;
    // console.log(event);
  }

  public onFileLeave(event){
    // console.log(event);
  }

}
