import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import {OrderComponent} from '../components/order/order.component';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  selectedOrder: Order;
  orders: Order[] = [];
  readonly URL_API = 'http://localhost:3000/api/orders/';

  
  constructor(private http: HttpClient) {

    this.selectedOrder = new Order();
    

   }

  getOrders(){
    
    return this.http.get<Order[]>(this.URL_API);
  }
  //crear
  postOrder( order: Order){
    return this.http.post(this.URL_API, order);
  }

  //actualizar
    putOrder(order:Order){
    return this.http.put(this.URL_API+ `/${order._id}`,order);
  }

  //eliminar
  deleteOrder(id:string){

    return this.http.delete(this.URL_API+`/${id}`);

  }

}
