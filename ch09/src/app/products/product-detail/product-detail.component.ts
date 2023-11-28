import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {

  @Input() product: Product | undefined;

  @Output()
  bought = new EventEmitter();

  @Output()
  deleted = new EventEmitter();

  @Input()
  id = -1;

  // used (observer) by async from the associated html template
  product$: Observable<Product> | undefined;

  constructor(
    private productService: ProductsService,
    public authService: AuthService,
    // contains the paramMap observable which can be subscribed and get route parameter values.
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      // The resolved data is available in the 'product' property of the route's data (see resolver when routing and loading this component)
      // switchMap returns a new observable
      switchMap(data => of(data['product']))
    );
  }

  ngOnChanges(): void {
   this.product$ = this.productService.getProduct(this.id);
  }

  buy() {
    this.bought.emit();
  }

  changePrice(product: Product, price: number) {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }

}
