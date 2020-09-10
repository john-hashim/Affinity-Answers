import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataserviceService } from '../services/dataservice.service'
import {
  animate,
  style,
  transition,
  trigger,
  state
} from "@angular/animations";

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '300px'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class Product1Component implements OnInit {


  constructor(private cartservice:CartService,private dataservice:DataserviceService) { }
  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(message=>this.message=message);
    this.helpMenuOpen = 'out';
  }

  message:number;
  helpMenuOpen: string;

  mobiles=[
    {title:'MOBILE1',img:'../../assets/Iphone SE.png',quantity:'1',price:5000},
    {title:'MOBILE2',img:'../../assets/Iphone SE.png',quantity:'1',price:5000},
    {title:'MOBILE3',img:'../../assets/Iphone SE.png',quantity:'1',price:5000},
    {title:'MOBILE4',img:'../../assets/Iphone SE.png',quantity:'1',price:5000},
    {title:'MOBILE5',img:'../../assets/Iphone SE.png',quantity:'1',price:5000},
    {title:'MOBILE6',img:'../../assets/Iphone SE.png',quantity:'1',price:5000},
    {title:'MOBILE7',img:'../../assets/Iphone SE.png',quantity:'1',price:5000}
  ]
  push(mobile){
    this.cartservice.pushthashim(mobile);
    this.dataservice.changemessage(1)
    console.log("item pushed")
  }


}
