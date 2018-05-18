import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentsService } from '../../services/components.service';


@Component({
  selector: 'timestamp',
  styleUrls: [ './timestamp.component.css' ],
  templateUrl: './timestamp.component.html',
  providers:[]
})
export class TimestampComponent {

  constructor( public route: ActivatedRoute, public components: ComponentsService) {
      components.apply({
       navbar: {visible : false},
       footer: {visible : false}
      });
  }

}
