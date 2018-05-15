import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elements',
  styleUrls: [ './elements.component.css' ],
  templateUrl: './elements.component.html'
})
export class ElementsComponent implements OnInit {

  constructor( public route: ActivatedRoute ) {}

  public ngOnInit() { }

}
