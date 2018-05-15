import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: "app-navbar",
  templateUrl:"navbar.component.html",
  providers: []
})
export class NavbarComponent{
  public navbar:any;
  constructor(public app: AppService) {
    this.navbar = app.navbar;
  }
}
