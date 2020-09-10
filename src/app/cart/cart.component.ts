import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataserviceService } from '../services/dataservice.service';
import { MaxLengthValidator } from '@angular/forms';
import { Cart } from '../model/cart'; 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartserivce:CartService,private dataservice:DataserviceService) { }
  componentcart:Cart[]=[];
  quantity:number;
  count:number;
  message:number;
  totalprice:number=0;
  ngOnInit(): void {
    this.componentcart=this.cartserivce.servicecart;
    this.dataservice.currentMessage.subscribe(message=>this.message=message);
    
  }
  removeFromCart(data){
    this.cartserivce.removeFromCart(data);
    this.dataservice.changemessage(1);
  }
  onQuantityChanges(value){
    this.totalprice=0;
    for(let cartitems of this.componentcart){
      console.log(cartitems.price,cartitems.quantity);
      console.log(typeof(cartitems.price)); 
      console.log(typeof(cartitems.quantity)); 
      console.log(typeof(this.totalprice)); 
      this.totalprice=this.totalprice+(cartitems.price*cartitems.quantity);
    }
  }
}
