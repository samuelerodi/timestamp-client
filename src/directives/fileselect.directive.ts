import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';


@Directive({ selector: '[ng2FileSelect]' })
export class FileSelectDirective {
  @Output() public onFileSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  protected element: ElementRef;

  public constructor(element: ElementRef) {
    this.element = element;
  }

  public isEmptyAfterSelection(): boolean {
    return !!this.element.nativeElement.attributes.multiple;
  }

  @HostListener('change')
  public onChange(): any {
    let files = this.element.nativeElement.files;
    this.onFileSelected.emit(files);

    if (this.isEmptyAfterSelection()) {
      this.element.nativeElement.value = '';
    }
  }
}
