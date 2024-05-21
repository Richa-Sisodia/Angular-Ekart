import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
product:Product;


@Input()
Getname: any= "";

@Input()
GetInventory: any= "";

@Input()
category: any= "";

@Input()
brandname: any= "";

@Input()
gender: any= "";

}