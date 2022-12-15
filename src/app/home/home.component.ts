import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  onRate($event: Event) {
    throw new Error('Method not implemented.');
  }

  foods: food[] = [];
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params
          ['searchTerm']);

            else if(params['tag'])
              this.foods = this.foodService.getAllFoodsByTag(params['tag'])

      else 
        this.foods = this.foodService.getAll();
    });
  }
}
