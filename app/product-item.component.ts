import { Component, Input } from '@angular/core';
import { Product } from './product.service';

@Component({
    selector: 'auction-product-item',
    templateUrl: 'app/product-item.component.html'
})
export class ProductItemComponent {
    @Input() product: Product;
}