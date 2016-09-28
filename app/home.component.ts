import { Component } from '@angular/core';
import { Product, ProductService } from './product.service';

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
            <div *ngFor="let prod of products" class="col-sm-4">
                <auction-product-item [product]="prod"></auction-product-item>
            </div>
        </div>
    `
})
export class HomeComponent {
    products: Product[] = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}