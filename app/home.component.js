"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var HomeComponent = (function () {
    function HomeComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.products = this.productService.getProducts();
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'auction-home-page',
            styleUrls: ['/home.css'],
            template: "\n        <div class=\"row carousel-holder\">\n            <div class=\"col-md-12\">\n                <auction-carousel></auction-carousel>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let prod of products\" class=\"col-sm-4\">\n                <auction-product-item [product]=\"prod\"></auction-product-item>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map