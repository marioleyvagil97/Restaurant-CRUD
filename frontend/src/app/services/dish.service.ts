import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  selectedDish: Dish = new Dish;
  dish: Dish[] = [];
  readonly URL_API = 'http://localhost:3000/api/dishes';

  constructor(private http: HttpClient) { }

  getDishes(){
    return this.http.get(this.URL_API)
  }

  postDish( dish: Dish){
    return this.http.post(this.URL_API, dish);
  }

  putDish(dish:Dish){
    return this.http.put(this.URL_API+ `/${dish.id}`,dish);
  }

  deleteDish(id:string){

    return this.http.delete(this.URL_API+`/${id}`);

  }

}
