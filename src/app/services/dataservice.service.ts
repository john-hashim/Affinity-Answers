import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CartService} from '../services/cart.service'

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  count:number
  private messagesource =new BehaviorSubject<number>(0);
  currentMessage=this.messagesource.asObservable();
  constructor(private cart:CartService) { }

  changemessage(message:number){
    this.count=this.cart.cartcount
    this.messagesource.next(this.count);
  }
}
 