import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { NgForm } from '@angular/forms';
import { Dish } from '../../models/dish';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishService],
})
export class DishesComponent implements OnInit {
  constructor(public dishService: DishService) {}

  ngOnInit(): void {
    this.getDishes();
   
  }

  getDishes() {
    this.dishService.getDishes().subscribe(
      (res) => (this.dishService.dishesArray = res),
      (err) => console.error(err)
    );
  }

  addDish(form: NgForm) {
    if (form.value._id) {
      this.dishService.putDish(form.value).subscribe(
        (res) => {
          console.log(res);
          this.getDishes();
          form.reset();
        },
        (err) => console.error(err)
      );
    } else {
      this.dishService.postDish(form.value).subscribe(
        (res) => {
          console.log(res);
          this.getDishes();
        },
        (err) => console.error(err)
      );
    }
  }

  deleteDish(id: string) {
    if (confirm('Estas seguro de eliminar el platillo?')) {
      this.dishService.deleteDish(id);
    }
    
  }

  editDish(dish: Dish) {
    this.dishService.selectedDish = dish;
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
