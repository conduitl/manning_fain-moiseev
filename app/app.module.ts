import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SearchComponent } from './search.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel.component';
import { ProductItemComponent } from './product-item.component';
import { StarsComponent } from './stars.component';
import { ProductDetailComponent } from './product-detail.component';

import { ProductService } from './product.service';

@NgModule({
    imports: [ 
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'products/:productId', component: ProductDetailComponent }
        ]) 
    ],
    declarations: [ 
        AppComponent,
        NavbarComponent,
        SearchComponent,
        FooterComponent,
        HomeComponent,
        CarouselComponent,
        ProductItemComponent,
        StarsComponent,
        ProductDetailComponent
    ],
    providers: [ ProductService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }