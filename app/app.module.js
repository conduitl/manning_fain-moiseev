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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar.component');
var search_component_1 = require('./search.component');
var footer_component_1 = require('./footer.component');
var home_component_1 = require('./home.component');
var carousel_component_1 = require('./carousel.component');
var product_item_component_1 = require('./product-item.component');
var stars_component_1 = require('./stars.component');
var product_detail_component_1 = require('./product-detail.component');
var product_service_1 = require('./product.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'products/:productId', component: product_detail_component_1.ProductDetailComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                search_component_1.SearchComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                carousel_component_1.CarouselComponent,
                product_item_component_1.ProductItemComponent,
                stars_component_1.StarsComponent,
                product_detail_component_1.ProductDetailComponent
            ],
            providers: [product_service_1.ProductService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map