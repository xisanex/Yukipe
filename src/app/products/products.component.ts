import { Component, OnInit } from '@angular/core';
import { ListOfProductsService, Products } from './list-of-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: Products[] = [];

  constructor(public listOfProductsService: ListOfProductsService) {}

  ngOnInit(): void {
    this.products = this.listOfProductsService.products;
    console.log(this.products);
  }
}
