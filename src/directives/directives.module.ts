import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { FileDropDirective } from './filedrop.directive';
import { FileSelectDirective } from './fileselect.directive';


@NgModule({
  declarations: [ FileDropDirective, FileSelectDirective ],
  imports:[],
  providers: [],
  exports:[FileDropDirective, FileSelectDirective ]
})
export class DirectivesModule {}
