import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataserviceService } from '../services/dataservice.service'

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss']
})
export class Product2Component implements OnInit {

  constructor(private cartservice:CartService,private dataservice:DataserviceService) { }
  message:number
  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(message=>this.message=message)
  }
  laptops=[
    {title:'LAPTOP1',img:'../../assets/predator.png',quantity:'1'},
    {title:'LAPTOP2',img:'../../assets/predator.png',quantity:'1'},
    {title:'LAPTOP3',img:'../../assets/predator.png',quantity:'1'},
    {title:'LAPTOP4',img:'../../assets/predator.png',quantity:'1'},
    {title:'LAPTOP5',img:'../../assets/predator.png',quantity:'1'},
    {title:'LAPTOP6',img:'../../assets/predator.png',quantity:'1'}
  ]
  push(laptop){
    this.cartservice.pushthashim(laptop)
    this.dataservice.changemessage(1)
  }

}
