import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product, ProductService } from './product.service';

import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'auction-home-page',
    styleUrls: ['/home.css'],
    template: `
        <div class="row carousel-holder">
            <div class="col-md-12">
                <auction-carousel></auction-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <input placeholder="Filter products by title"
                           class="form-control" type="text"
                           [formControl]="titleFilter">
                </div>
            </div>
        </div>
        <div class="row">
            <div *ngFor="let prod of products" class="col-sm-4">
                <auction-product-item [product]="prod"></auction-product-item>
            </div>
        </div>
    `
})
export class HomeComponent {
    products: Product[] = [];
    titleFilter: FormControl = new FormControl();
    filterCriteria: string;

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.titleFilter.valueChanges
            .debounceTime(100)
            .subscribe(
                value => this.filterCriteria = value,
                error => console.error(error));
    }
}