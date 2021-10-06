import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HOME_ROUTING } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HOME_ROUTING,
    // MATERIAL_MODULES,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
