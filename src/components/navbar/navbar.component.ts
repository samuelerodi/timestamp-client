import { Component } from '@angular/core';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: "app-navbar",
  templateUrl:"navbar.component.html",
  providers: []
})
export class NavbarComponent{
  public navbar:any;
  constructor(public components: ComponentsService) {
    this.navbar = components.navbar;
  }
}
