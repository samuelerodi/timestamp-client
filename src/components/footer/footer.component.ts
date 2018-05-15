import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: "app-footer",
  templateUrl:"footer.component.html",
  providers: []
})
export class FooterComponent{
  public footer:any;
  constructor(public app: AppService) {
    this.footer = app.footer;
  }
}
