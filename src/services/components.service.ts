import { Injectable } from '@angular/core';
import { componentsConfig } from '../components/components.config';
import * as _ from 'lodash';

@Injectable()
export class ComponentsService {
  public navbar:any=_.clone(componentsConfig.navbar);
  public footer:any=_.clone(componentsConfig.footer);
  private _:any=_;

  public reload() {
    _.merge(this.navbar,componentsConfig.navbar);
    _.merge(this.footer,componentsConfig.footer);
  }
  public apply(config:any){
    if(!config) return;
    if(config.navbar) _.merge(this.navbar, config.navbar);
    if(config.footer) _.merge(this.footer, config.footer);
  }
  constructor() {}

}
