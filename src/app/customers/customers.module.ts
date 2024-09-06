import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule
  ]
})
export class CustomersModule { }
