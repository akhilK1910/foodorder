import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cs:CartService){
    this.setCart();
    
     

  }
  setCart(){
    this.cart=this.cs.getCart();
  }
  removeFromCart(ci:CartItem){
    this.cs.removeFromCart(ci.food.id);
    this.setCart();
  }
  changeQuantity(ci:CartItem,quantity:string){
    const quan=parseInt(quantity);
    this.cs.changeQuantity(quan,ci.food.id);
    this.setCart();
    let sum=0;this.cart.items.map(obj=>{
      sum+=obj.quantity;
    })
    console.log(sum);
  }
}
