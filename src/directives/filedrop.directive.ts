import { Directive, EventEmitter, Renderer2, ComponentRef, ElementRef, HostListener, HostBinding, Input, Output } from '@angular/core';

const FILE_OVER_CLASS = 'drop-zone-over';
const FILE_DROPPED_CLASS = 'drop-zone-drop';

@Directive({
  selector: '[ng2FileDrop]'
})
export class FileDropDirective {
  @Output() public fileOver: EventEmitter<any> = new EventEmitter();
  @Output() public onDragLeave: EventEmitter<any> = new EventEmitter();
  @Output() public onDragOver: EventEmitter<any> = new EventEmitter();
  @Output() public onFileDrop: EventEmitter<File[]> = new EventEmitter<File[]>();
  protected _class: string[] = [];


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {  }

  addClass(className: string) {
     this.renderer.addClass(this.elementRef.nativeElement, className);
  }
  removeClass(className: string) {
     this.renderer.removeClass(this.elementRef.nativeElement, className);
  }


  // @HostBinding('class')
  // get elementClass(): string {
  //     return this._class.join(' ');
  // }

  @HostListener('dragleave', ['$event']) public dragLeave(evt){
    this._preventAndStop(evt);
    if ((this as any).element) {
      if (evt.currentTarget === (this as any).element[ 0 ]) {
        return;
      }
    }
    let transfer = this._getTransfer(evt);
    this.fileOver.emit(false);
    if (this._class.indexOf(FILE_OVER_CLASS)!= -1) this._class.splice(this._class.indexOf(FILE_OVER_CLASS), 1);
    this.onDragLeave.emit(transfer.files);
  }
  @HostListener('dragover', ['$event']) dragOver(evt){
    this._preventAndStop(evt);
    let transfer = this._getTransfer(evt);
    if (!this._haveFiles(transfer.types)) {
      return;
    }
    transfer.dropEffect = 'copy';
    this.removeClass(FILE_DROPPED_CLASS);
    this.addClass(FILE_OVER_CLASS);
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
    this.removeClass(FILE_OVER_CLASS);
    this.addClass(FILE_DROPPED_CLASS);
    this.onFileDrop.emit(transfer.files);
  }


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
