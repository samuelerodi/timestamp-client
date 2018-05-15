import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styleUrls: [ './about.component.css' ],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(public route: ActivatedRoute) {}

  public ngOnInit() {  }


}
