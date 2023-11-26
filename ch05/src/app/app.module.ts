import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import {FilterPipe} from './filter.pipe';
import {AutofocusDirective} from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    // standalone pipe, does not add it to the declarations because it is not a module (Standalone)
    FilterPipe,
    // Standalone directive
    AutofocusDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
