import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Injectable()
export class AppService {
  public navbar:any= {
    visible : true,
    hide() { this.visible = false; },
    show() { this.visible = true; },
    toggle() { this.visible = !this.visible; }
  };
  public footer:any= {
    visible : true,
    hide() { this.visible = false; },
    show() { this.visible = true; },
    toggle() {this.visible = !this.visible; }
  };
  public showComponents(){
    this.footer.show()
    this.navbar.show()
  }
  public hideComponents(){
    this.footer.hide()
    this.navbar.hide()
  }
  public reload() {
    this.footer.show()
    this.navbar.show()
  }
  constructor(private router: Router) {
    router.events
    .subscribe((event) =>{
      if (event instanceof NavigationStart) this.reload();
      // example: NavigationStart, RoutesRecognized, NavigationEnd
    });
   }
   
  ngOnInit() { }

}
