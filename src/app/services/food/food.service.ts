import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tags';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Ramen noodles',
        cookTime: '10-20',
        price: 75,
        favorite: false,
        origins: ['China', 'Japan'],
        star: 4,
        imageUrl: '/assets/f1.jpeg',
        tags: ['lunch', 'noodles', 'chinese']
      },
      {
        id: 2,
        name: 'Pan cakes',
        cookTime: '15-20',
        price: 55,
        favorite: false,
        origins: ['USA'],
        star: 3.8,
        imageUrl: '/assets/f2.jpg',
        tags: ['breakfast', 'snack', 'sweet']
      },
      {
        id: 1,
        name: 'Pasta',
        cookTime: '30-35',
        price: 40,
        favorite: true,
        origins: ['Italy,Greece'],
        star: 4.2,
        imageUrl: '/assets/f3.jpg',
        tags: ['lunch', 'cheesy', 'italian','pasta']
      },
      {
        id: 4,
        name: 'Burger',
        cookTime: '20-30',
        price: 35,
        favorite: false,
        origins: ['Germany', 'USA'],
        star: 5,
        imageUrl: '/assets/f4.jpeg',
        tags: ['snack', 'fastfood','burger']
      },
      {
        id: 5,
        name: 'Fish fry',
        cookTime: '15-25',
        price: 45,
        favorite: false,
        origins: ['Taiwan', 'Japan'],
        star: 4,
        imageUrl: '/assets/f5.jpg',
        tags: ['lunch', 'fastfood', 'fried','fish']
      },
      {
        id: 6,
        name: 'Tomato Soup',
        cookTime: '30-35',
        price: 30,
        favorite: true,
        origins: ['Italy', 'France'],
        star: 4,
        imageUrl: '/assets/f6.jpg',
        tags: ['lunch', 'fastfood', 'soup']
      }
    ]
  }
  getAllByTag(tag: string): Foods[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag.toLowerCase()));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 3 },
      { name: 'Pasta', count: 1 },
      { name: 'Lunch', count: 4 },
      { name: 'Sweet', count: 1 },
      { name: 'Burger', count: 1 },
      { name: 'Soup', count: 1 }
    ]
  }
  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }
}
