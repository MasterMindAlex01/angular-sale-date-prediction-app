import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    OrdersPageComponent,
    NewOrderPageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule
  ]
})
export class CustomersModule { }
