import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SearchComponent } from './search.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel.component';
import { ProductItemComponent } from './product-item.component';
import { StarsComponent } from './stars.component';

import { ProductService } from './product.service';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ 
        AppComponent,
        NavbarComponent,
        SearchComponent,
        FooterComponent,
        HomeComponent,
        CarouselComponent,
        ProductItemComponent,
        StarsComponent
    ],
    providers: [ ProductService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }