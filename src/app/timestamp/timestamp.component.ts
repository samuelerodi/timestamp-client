import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { AppState } from '../app.service';

@Component({
  selector: 'timestamp',
  styleUrls: [ './timestamp.component.css' ],
  templateUrl: './timestamp.component.html',
  providers:[]
})
export class TimestampComponent implements OnInit {

  constructor( public route: ActivatedRoute, public app: AppService, public appState: AppState) {
  }

  public ngOnInit() {
    this.app.hideComponents();
  }

}
