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
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  private loading:boolean=false;
  addClass(className: string) {
     this.renderer.addClass(this.elementRef.nativeElement, className);
  }
  removeClass(className: string) {
     this.renderer.removeClass(this.elementRef.nativeElement, className);
  }

  protected onLoading(){
    console.log('on loading ')
    this.loading=true;
    this.addClass(LOADING_CLASS);
  }
  protected offLoading(){
    console.log('off loading ')
    this.loading=false;
    this.removeClass(LOADING_CLASS);
  }
  @Input()
  set observe(o:Observable<any>) {

    // this.vcRef.clear();
    if (!o || o.closed) {
      if (!this.loading) return;
      this.offLoading();
      return;
    }; //loading done
    this.onLoading();
    if(o) o.subscribe(()=>{this.offLoading()});

  }


}
