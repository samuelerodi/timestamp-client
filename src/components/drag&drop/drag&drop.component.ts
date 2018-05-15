import { HostBinding, HostListener, Component, EventEmitter } from '@angular/core';

@Component({
  selector: "app-dnd",
  outputs:["onFile"],
  templateUrl:"drag&drop.component.html"
})
export class DndComponent{
  private isDragging:boolean=false;
  private files:any[];
  private upload_button:boolean=false;
  onFile:EventEmitter<any>=new EventEmitter();
  private error:string;
  @HostBinding('style.background') private background = '#eee';

  constructor() { }
  @HostListener('dragover', ['$event']) onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    this.isDragging=true;
    if(files.length > 0){
    }
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
      evt.preventDefault();
      evt.stopPropagation();
      //do some stuff
      this.isDragging=false;
    }

  @HostListener('drop', ['$event']) public onDrop(evt){
    this.isDragging=false;
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    this.files = files;
  }
  onChange(event) {
      var files = event.srcElement.files;
      this.files=files;
  }
  upload(files){
    this.upload_button=true;
    this.onFile.emit(files);
  }

}
