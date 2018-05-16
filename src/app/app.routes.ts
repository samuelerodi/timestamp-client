import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoadingComponent } from './loading';
import { TimestampComponent } from './timestamp';
import { ElementsComponent } from './elements';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'timestamp',  component: TimestampComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: '**',    component: NoContentComponent },
];
