
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DndComponent } from './drag&drop/drag&drop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    DndComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    DndComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
