//PLATFORM
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ENVIRONMENT AND ROUTING
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';


//UI COMPONENTS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgDragDropModule } from 'ng-drag-drop';

//STYLES
import '../styles/styles.scss';
import '../styles/headings.css';

//CUSTOM SERVICES
import { AppService, InternalStateType } from '../services/app.service';
import { ComponentsService } from '../services/components.service';

//CUSTOM UI COMPONENTS
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';

//PAGES
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { TimestampComponent } from './timestamp';
import { LoadingComponent } from './loading';
import { ElementsComponent } from './elements';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { DevModuleModule } from './+dev-module';



// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoadingComponent,
    ElementsComponent,
    AboutComponent,
    TimestampComponent,
    HomeComponent,
    NoContentComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    NgbModule,
    NgDragDropModule.forRoot(),
    ComponentsModule,
    DirectivesModule,

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [ DevModuleModule ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS,
    AppService,
    ComponentsService
  ]
})
export class AppModule {}
