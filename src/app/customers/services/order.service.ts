import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PaginatedResult } from '../interfaces/paginated-result.interface';
import { OrderResponse } from '../interfaces/order-response.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class OrderService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getOrderListByCustId(custId: number, pageNumber: number = 1, pageSize: number = 10)
  : Observable<PaginatedResult<OrderResponse[]>> {

    const params = new HttpParams()
    .set('custId', custId)
    .set('pageNumber', pageNumber)
    .set('PageSize', pageSize);

    return this.httpClient.get<PaginatedResult<OrderResponse[]>>(
      `${ this.baseUrl}/api/Orders/GetOrderListByCustId`, { params });
  }
}
