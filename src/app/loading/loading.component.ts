import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'loading',
  styleUrls: [ './loading.component.scss' ],
  templateUrl: './loading.component.html',
  providers:[]
})
export class LoadingComponent{
  constructor(public route: ActivatedRoute, public components: ComponentsService) {
    components.apply({
      navbar:{visible:false},
      footer:{visible:false}
    });
  }
}
