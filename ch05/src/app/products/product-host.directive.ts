import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Directive({
  selector: '[appProductHost]'
})
export class ProductHostDirective implements OnInit {

  // ViewContainerRef -> give us access to the view container that will host the dynamically created component
  constructor(private vc: ViewContainerRef) { }

  ngOnInit(): void {
    // ProductDetailComponent
    const productRef = this.vc.createComponent(ProductDetailComponent);
    // pass a value to the input property binding fo the product detail component:
    /*
      @Input()
      product: Product | undefined;
     */
    productRef.setInput('product', {
      name: 'Optical mouse',
      price: 130
    });
  }

}
