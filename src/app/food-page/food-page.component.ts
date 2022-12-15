import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { food } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {


  food!:food;



  constructor(private activatedRoute:ActivatedRoute, 
    private foodService:FoodService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })
   }

  ngOnInit(): void {
  }

}
