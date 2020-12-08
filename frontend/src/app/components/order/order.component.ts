import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from "../../models/order";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      (res) => {this.orderService.orders = res
      },
      (err) => console.error(err)
    );
  }
//-------------------------------------
  addOrder(form: NgForm) {
/** this.orderService.postOrder(form.value).subscribe(
      res=>{
        this.getOrders();
      },
      err => console.error(err)
    ) */
   
   
   
     if (form.value._id) {
      this.orderService.putOrder(form.value).subscribe(
        (res) => {
          console.log(res);
          this.getOrders();
          form.reset();
        },
        (err) => console.error(err)
      );
    } else {
      this.orderService.postOrder(form.value).subscribe(
        (res) => {
          console.log(res);
          this.getOrders();
        },
        (err) => console.error(err)
      );
    }
    
    
  }
  //-----------------------------------------------------------

  deleteOrder(id: string) {
    if (confirm('Estas seguro de eliminar la orden?')) {
      this.orderService.deleteOrder(id).subscribe(
        (res) => {
          console.log(res);
          this.getOrders();
        },
        (err) => console.error(err)
      );
    }
  }

  editOrder(order: Order) {
    this.orderService.selectedOrder = order;
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}


