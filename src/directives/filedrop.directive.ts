import { Directive, EventEmitter, ElementRef, HostListener, HostBinding, Input, Output } from '@angular/core';

const fileOverClass = 'drop-zone-over';
const fileDroppedClass = 'drop-zone-drop';

@Directive({
  selector: '[ng2FileDrop]'
})
export class FileDropDirective {
  @Output() public fileOver: EventEmitter<any> = new EventEmitter();
  @Output() public onDragLeave: EventEmitter<any> = new EventEmitter();
  @Output() public onDragOver: EventEmitter<any> = new EventEmitter();
  @Output() public onFileDrop: EventEmitter<File[]> = new EventEmitter<File[]>();
  protected _class: string[] = [];

  @HostBinding('class')
  get elementClass(): string {
      return this._class.join(' ');
  }

  @HostListener('dragleave', ['$event']) public dragLeave(evt){
    this._preventAndStop(evt);
    if ((this as any).element) {
      if (evt.currentTarget === (this as any).element[ 0 ]) {
        return;
      }
    }
    let transfer = this._getTransfer(evt);
    this.fileOver.emit(false);
    if (this._class.indexOf(fileOverClass)!= -1) this._class.splice(this._class.indexOf(fileOverClass), 1);
    this.onDragLeave.emit(transfer.files);
  }
  @HostListener('dragover', ['$event']) dragOver(evt){
    this._preventAndStop(evt);
    let transfer = this._getTransfer(evt);
    if (!this._haveFiles(transfer.types)) {
      return;
    }
    transfer.dropEffect = 'copy';
    if (this._class.indexOf(fileDroppedClass)!= -1) this._class.splice(this._class.indexOf(fileDroppedClass), 1);
    if (this._class.indexOf(fileOverClass)== -1) this._class.push(fileOverClass);
    this.fileOver.emit(true);
    this.onDragOver.emit(transfer.files);
  }
  @HostListener('drop', ['$event']) public fileDrop(evt){
    this._preventAndStop(evt);
    let transfer = this._getTransfer(evt);
    if (!transfer) {
      return;
    }
    this.fileOver.emit(false);
    if (this._class.indexOf(fileOverClass)!= -1) this._class.splice(this._class.indexOf(fileOverClass), 1);
    if (this._class.indexOf(fileOverClass)== -1) this._class.push(fileDroppedClass);
    this.onFileDrop.emit(transfer.files);
  }
  constructor() {  }

  protected _getTransfer(event: any): any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
  }

  protected _preventAndStop(event: any): any {
    event.preventDefault();
    event.stopPropagation();
  }

  protected _haveFiles(types: any): any {
    if (!types) {
      return false;
    }
    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    } else if (types.contains) {
      return types.contains('Files');
    } else {
      return false;
    }
  }
}
