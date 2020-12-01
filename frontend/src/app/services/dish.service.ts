import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../models/dish';
import {DishesComponent} from '../components/dishes/dishes.component'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  selectedDish: Dish;
  dish: Dish[] = [];
  readonly URL_API = 'http://localhost:3000/api/dishes/';

  dishesArray: Dish[] = [];
  constructor(private http: HttpClient) {

    this.selectedDish = new Dish();
    

   }

  getDishes(){

    
    return this.http.get<Dish[]>(this.URL_API);
  }

  postDish( dish: Dish){
    return this.http.post(this.URL_API, dish);
  }

  putDish(dish:Dish){
    return this.http.put(this.URL_API+ `/${dish._id}`,dish);
  }

  deleteDish(id:string){

    return this.http.delete(this.URL_API+`/${id}`);

  }

}
