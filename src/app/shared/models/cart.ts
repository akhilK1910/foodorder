import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[]=[];
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=>{
            totalPrice+=item.price;
        })
        return totalPrice;
    }
    get totalItem():number{
        let sum=0;
        this.items.forEach(item=>{
            sum+=item.quantity;
        })
        return sum;
    }
}