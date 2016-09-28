import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item.component';
import { StarsComponent } from './stars.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ 
        AppComponent,
        ProductItemComponent,
        StarsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }