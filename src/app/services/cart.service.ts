import { Injectable,OnInit } from '@angular/core';
import { Cart} from '../model/cart'



@Injectable({
  providedIn: 'root'
})

export class CartService implements OnInit{
  cartcount=0;
  flag=0;
  servicecart:Cart[]=[];
  ngOnInit(){
  }
  pushthashim(data){
    this.flag=0
    let cartlenght=this.servicecart.length;
    if(cartlenght>0){
        for(var i=0;i<cartlenght;i++){
            if(data==this.servicecart[i]){ 
              this.flag=1;
            }
        } 
    }
    if(this.flag==1){
       alert("Item is already in the cart")
    }else{
      if(this.cartcount<5){
        this.servicecart.push(data);
        this.cartcount++;
      }else{
        alert("Cart is full")
      }
    }
    console.log(this.cartcount)
  }
  removeFromCart(data){
    let cartlenght=this.servicecart.length;
    for(var i=0;i<cartlenght;i++){
      if(data==this.servicecart[i]){
          let k=i;
          while(k<cartlenght){
              this.servicecart[k]=this.servicecart[k+1]
              k++;
          }
      } 
    }
    this.servicecart.pop();
    this.cartcount--;

  }
  tottalamount(){

  }

  constructor() { }

}
