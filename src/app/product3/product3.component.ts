import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataserviceService } from '../services/dataservice.service'

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.scss']
})
export class Product3Component implements OnInit {

  constructor(private cartservice:CartService,private dataservice:DataserviceService) { }
  message:number;
  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(message=>this.message=message)
  }
  tvs=[
    {title:'TV1',img:'../../assets/samsung-removebg-preview.png',quantity:'1'},
    {title:'TV2',img:'../../assets/samsung-removebg-preview.png',quantity:'1'},
    {title:'TV3',img:'../../assets/samsung-removebg-preview.png',quantity:'1'},
    {title:'TV4',img:'../../assets/samsung-removebg-preview.png',quantity:'1'},
    {title:'TV5',img:'../../assets/samsung-removebg-preview.png',quantity:'1'},
    {title:'TV6',img:'../../assets/samsung-removebg-preview.png',quantity:'1'}
  ]
  push(tv){
    this.cartservice.pushthashim(tv);
    this.dataservice.changemessage(1)
  }

}
