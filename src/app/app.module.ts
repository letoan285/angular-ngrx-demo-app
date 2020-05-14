import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';

// Other imports removed for brevity

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot({
      products: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
