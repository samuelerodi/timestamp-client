import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { FileDropDirective } from './filedrop.directive';
import { FileSelectDirective } from './fileselect.directive';
import { LoadingDirective } from './loading.directive';


@NgModule({
  declarations: [ FileDropDirective, FileSelectDirective, LoadingDirective ],
  imports:[],
  providers: [],
  exports:[FileDropDirective, FileSelectDirective, LoadingDirective ]
})
export class DirectivesModule {}
