import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Injectable()
export class AppService {
  public navbar:any={
    visible : true,
    hide() { this.visible = false; },
    show() { this.visible = true; },
    toggle() { this.visible = !this.visible; }
  };
  public footer:any={
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

  constructor(private router: Router) {

  }
  ngOnInit() {
    // our code is in here
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) this.showComponents();
      // example: NavigationStart, RoutesRecognized, NavigationEnd
      console.log("changed event")

    });
  }

}
