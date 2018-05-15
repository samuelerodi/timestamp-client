import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'loading',
  styleUrls: [ './loading.component.css' ],
  templateUrl: './loading.component.html',
  providers:[]
})
export class LoadingComponent implements OnInit {
  constructor(public route: ActivatedRoute, public app: AppService) {

  }
  public ngOnInit() {
    this.app.hideComponents();
  }
}
