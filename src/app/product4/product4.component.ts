import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataserviceService } from '../services/dataservice.service'
@Component({
  selector: 'app-product4',
  templateUrl: './product4.component.html',
  styleUrls: ['./product4.component.scss']
})
export class Product4Component implements OnInit {

  constructor(private cartservice:CartService,private dataservice:DataserviceService) { }
  message:number;
  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(message=>this.message=message)
  }
  acs=[
    {title:'AC1',img:'../../assets/AMSTRID.png',quantity:'1'},
    {title:'AC2',img:'../../assets/AMSTRID.png',quantity:'1'},
    {title:'AC3',img:'../../assets/AMSTRID.png',quantity:'1'},
    {title:'AC4',img:'../../assets/AMSTRID.png',quantity:'1'},
    {title:'AC5',img:'../../assets/AMSTRID.png',quantity:'1'},
    {title:'AC6',img:'../../assets/AMSTRID.png',quantity:'1'}
  ]
  push(ac){
    this.cartservice.pushthashim(ac);  
    this.dataservice.changemessage(1)
  }
}
