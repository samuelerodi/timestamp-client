import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Draggable } from './draggable/draggable.directive';
import { Droppable } from './droppable/droppable.directive';
import { NgDragDropService } from './shared/ng-drag-drop.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [ ]
})
export class DirectivesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DirectivesModule,
      providers: [NgDragDropService]
    };
  }
}
