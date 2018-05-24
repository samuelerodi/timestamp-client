import { Directive, Component, Renderer2, ComponentRef, ElementRef, HostListener, HostBinding, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";

const LOADING_CLASS='loading'
// @Component({
//   selector: 'loading-component',
//   template: `<div class="loading"></div>`
// })
// export class LoadingComponent {constructor() { }}

@Directive({
  selector: '[ng2loading]'
})
export class LoadingDirective {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef) {}

  private loading:boolean=false;
  private spinner:any = document.createElement('div');
  private height:number;
  private children:any;
  addClass(className: string) {
     this.renderer.addClass(this.elementRef.nativeElement, className);
  }
  removeClass(className: string) {
     this.renderer.removeClass(this.elementRef.nativeElement, className);
  }
  hideContent(){
    this.children = this.elementRef.nativeElement.children;

  }


  protected onLoading(){
    this.loading=true;
    this.height=this.elementRef.nativeElement.offsetHeight;
    // this.viewContainer.clear();
    this.renderer.appendChild(this.elementRef.nativeElement, this.spinner);
    this.renderer.setStyle(this.spinner, 'height', this.height);
    this.addClass(LOADING_CLASS);
  }
  protected offLoading(){
    console.log('off loading ')
    if (!this.loading) return;
    this.loading=false;
    // this.viewContainer.create(this.protoViewRef);
    this.renderer.removeChild(this.elementRef.nativeElement, this.spinner);
    this.removeClass(LOADING_CLASS);
  }
  @Input()
  set ng2loading(o:Observable<any>) {
    if (!o) return;
    this.onLoading();
    o.subscribe(()=>this.offLoading());
  }


}
