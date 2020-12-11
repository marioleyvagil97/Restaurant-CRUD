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

  dishesArray: Dish[] =[];

  constructor(private http: HttpClient) {

    this.selectedDish = new Dish();
    

   }

  getDishes(){

    
    return this.http.get<Dish[]>(this.URL_API);
  }

  postDish( dish: Dish){
    let isnum = /^\d+$/.test(String(dish.cost));
    let isnum2 =/^\d+$/.test(String(dish.benefict));
    let blank1 = (dish.name.trim).length;
    let blank2 = (dish.type.trim).length;
    let blank3 = (dish.description.trim).length;
    console.log(blank1,blank2,blank3);
    var check = false


  
    if(!isnum  || !isnum2   ){
      alert("No se puede hacer el registro con letras en el costo o beneficio");
    
    }else{
      return this.http.post(this.URL_API, dish); ;

    }


  }

  putDish(dish:Dish){
    if(dish.name.trim.length == 0 || dish.type.trim.length == 0 || dish.description.trim.length == 0){
      alert("No se puede hacer el registro con campos vacios");
      
    }else{
    return this.http.put(this.URL_API+ `/${dish._id}`,dish);
  }
  }

  deleteDish(id:string){

    fetch(this.URL_API+`/${id}`,{method:'DELETE'})
    .then(res => res.text())
    .then(res => {
      console.log(res);

for(var i=0;i<=this.dishesArray.length;i++){
      if(this.dishesArray[i]._id == id){
        this.dishesArray.splice(i);
      }
    }


    });

  }

}
