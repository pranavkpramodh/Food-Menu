import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {


  foodPageTags?:string[];
  tags?:Tag[];

  constructor(private foodServices:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodServices.getAllTags();
  }

}
