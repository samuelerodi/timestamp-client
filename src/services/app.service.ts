import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ComponentsService } from './components.service'

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppService {

  //HANDLE INTERNAL APP STATE + GETTER AND SETTERS
  public _state: InternalStateType = { };
  public get state() { return JSON.parse(JSON.stringify(this._state));}
  public set state(value) { throw new Error('do not mutate the `.state` directly');}
  public get(prop?: any) { return prop ? this._state[prop] : this._state;}
  public set(prop: string, value: any) { return this._state[prop] = value;}

  constructor(private router: Router, private components: ComponentsService) {
    router.events
    .subscribe((event) =>{
      if (event instanceof NavigationStart) components.reload();
      // example: NavigationStart, RoutesRecognized, NavigationEnd
    });
   }
 ngOnInit() {}
}
