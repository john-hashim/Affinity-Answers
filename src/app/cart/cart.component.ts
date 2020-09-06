import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataserviceService } from '../services/dataservice.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartserivce:CartService,private dataservice:DataserviceService) { }
  componentcart=[]
  count:number;
  message:number;
  ngOnInit(): void {
    this.componentcart=this.cartserivce.servicecart;
    this.dataservice.currentMessage.subscribe(message=>this.message=message)
  }
  removeFromCart(data){
    this.cartserivce.removeFromCart(data);
    this.dataservice.changemessage(1)
  }

}
