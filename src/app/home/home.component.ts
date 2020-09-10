import { Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  togglevalue=true;
  constructor(private cartservices:CartService,private dataservice:DataserviceService) { }
  count=0

  message:number
  
  
  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(message=>this.message=message)
  }
  carttoggle(){
    this.togglevalue=!this.togglevalue
  }

}
