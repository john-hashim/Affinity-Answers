import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product1Component } from '../app/product1/product1.component';
import { Product2Component } from '../app/product2/product2.component';
import { Product3Component } from '../app/product3/product3.component';
import { Product4Component } from '../app/product4/product4.component';
import { BuynowComponent } from './buynow/buynow.component';



const routes: Routes = [
  {path:'',component:Product1Component},
  {path:'product1',component:Product1Component},
  {path:'product2',component:Product2Component},
  {path:'product3',component:Product3Component},
  {path:'product4',component:Product4Component},
  {path:'buynow',component:BuynowComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
