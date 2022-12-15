import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id :number): food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :food[]{
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));


  }


  getAllTags():Tag[]{
    return [
      { name: 'All', count: 16 },
      { name: 'FastFood', count: 9 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 8 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 2 },
    ];

  }





  getAllFoodsByTag(tag:string): food[]{

    return tag == "All"?
       this.getAll() :
       this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAll():food[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl:'/assets/images/pizza.webp',

        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl:'/assets/images/meatballs.jpg',

        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl:'/assets/images/burgeer.jpg',

        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/french-fries.webp',

        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl:'/assets/images/chicken-soup.jpg',

        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl:  '/assets/images/pizza2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },


      {
        id: 7,
        name: 'Sadya',
        price: 19,
        cookTime: '40-50',
        favorite: true,
        origins: ['India, Kerala'],
        stars: 4.0,
        imageUrl:  '/assets/images/sadya.webp',
        tags: ['Lunch'],
      },
      {
        id: 8,
        name: 'Beef Biriyani',
        price: 20,
        cookTime: '40-50',
        favorite: false,
        origins: ['India'],
        stars: 4.0,
        imageUrl:  '/assets/images/beef biriyani.jpg',
        tags: ['Lunch'],
      },
      {
        id: 9,
        name: 'Chicken Biriyani',
        price: 9,
        cookTime: '45-55',
        favorite: false,
        origins: ['India'],
        stars: 4.0,
        imageUrl:  '/assets/images/chicken biriyani.jpg',
        tags: ['Lunch'],
      },
      {
        id: 10,
        name: 'Fukuoka Ramen',
        price: 9,
        cookTime: '30-40',
        favorite: false,
        origins: ['Japan'],
        stars: 4.0,
        imageUrl:  '/assets/images/Fukuoka Ramen.jpg',
        tags: ['Soup'],
      },
      
      {
        id: 11,
        name: 'rolled meat',
        price: 5,
        cookTime: '10-20',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl:  '/assets/images/rolled meat.webp',
        tags: ['FastFood'],
      },
      
      {
        id: 12,
        name: 'samosa',
        price: 15,
        cookTime: '30-40',
        favorite: false,
        origins: ['India'],
        stars: 4.0,
        imageUrl:  '/assets/images/samosa.jpg',
        tags: ['FastFood'],
      },
      
      {
        id: 13,
        name: 'chinese noodles',
        price: 15,
        cookTime: '30-40',
        favorite: true,
        origins: ['China'],
        stars: 4.0,
        imageUrl:  '/assets/images/chinese noodles.jfif',
        tags: ['Lunch','FastFood'],
      },
      {
        id: 14,
        name: 'Chicken Mandhi',
        price: 15,
        cookTime: '30-40',
        favorite: false,
        origins: ['Middle East'],
        stars: 4.0,
        imageUrl:  '/assets/images/Chicken Mandhi.jpg',
        tags: ['Lunch'],
      },
      {
        id: 15,
        name: 'alfaham',
        price: 20,
        cookTime: '30-40',
        favorite: true,
        origins: ['Middle East'],
        stars: 4.0,
        imageUrl:  '/assets/images/alfaham.jpg',
        tags: ['FastFood'],
      },
      {
        id: 16,
        name: 'veg noodles',
        price: 20,
        cookTime: '30-40',
        favorite: true,
        origins: ['China'],
        stars: 4.0,
        imageUrl:  '/assets/images/veg noodles.jpg',
        tags: ['FastFood'],
      }
      
   



    ]
    
  }

}
     