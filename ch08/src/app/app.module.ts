import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import {AuthInterceptor} from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    AuthModule
  ],
  providers: [
    // An HTTP interceptor must be provided in the same Angular module that imports HttpClientModule.
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
      //HTTP_INTERCEPTORS injection token can accept multiple service instancess.
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
