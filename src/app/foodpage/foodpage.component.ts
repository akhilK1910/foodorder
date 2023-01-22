import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
  food!:Foods;
  buttonActive=true;
  constructor(private activatedRoute:ActivatedRoute,private fs:FoodService,private cs :CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']) 
        this.food=fs.getFoodById(params['id']);
    })
  }
  ngOnInit(): void {
    this.buttonActive=(this.cs.getCart().items.find(item=>item.food.id==this.food.id)===undefined);
  }
  addToCart(){
    console.log(this.cs.getCart().items.find(item=>item.food.id==this.food.id));
    this.cs.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  goToCart() {
    this.router.navigateByUrl('/cart-page');
  }
  
}
