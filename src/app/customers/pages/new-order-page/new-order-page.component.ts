import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SaleDatePrediction } from '../../interfaces/sale-date-prediction.interface';
import { OrderService } from '../../services/order.service';
import { OrderDetailRequest, OrderRequest } from '../../interfaces/order-request.interface';

@Component({
  selector: 'customers-new-order-page',
  templateUrl: './new-order-page.component.html',
  styleUrl: './new-order-page.component.css'
})
export class NewOrderPageComponent implements OnInit {

  @Input()
  public saleDatePrediction!: SaleDatePrediction;

  public orderForm = new FormGroup({
    id:        new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<string>(''),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img:    new FormControl(''),
  });

  public orderDetailForm = new FormGroup({
    id:        new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<string>(''),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img:    new FormControl(''),
  });

  constructor(
    private orderService: OrderService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    if ( !this.saleDatePrediction ) throw Error('saleDatePrediction property is required');
  }

  get currentOrder(): OrderRequest {
    const order = this.orderForm.value as OrderRequest;
    return order;
  }

  get currentOrderDetail(): OrderDetailRequest {
    const orderDetail = this.orderDetailForm.value as OrderDetailRequest;
    return orderDetail;
  }

  onSubmit():void {

    if ( this.orderForm.invalid ) return;

    this.orderService.addOrder( this.currentOrder )
      .subscribe( );
  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }
}
