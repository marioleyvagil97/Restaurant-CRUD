import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DishService]
})
export class MenuComponent implements OnInit {

  constructor(public dishService: DishService) { }

  ngOnInit(): void {
    this.getDishes();
  }

  getDishes(){
    this.dishService.getDishes().subscribe(
      (res) => (this.dishService.dishesArray = res),
      (err) => console.log(err)
    );
  }

}
