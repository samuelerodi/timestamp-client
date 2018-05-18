import { Component } from '@angular/core';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: "app-footer",
  templateUrl:"footer.component.html",
  providers: []
})
export class FooterComponent{
  public footer:any;
  constructor(public components: ComponentsService) {
    this.footer = components.footer;
  }
}
