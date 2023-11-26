import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Injectable()
export class ProductViewService {

  private product: Product | undefined;

  constructor(private productService: ProductsService) { }

  // Returns the output observable that results form the pipe operator
  // As soon as an inner observable emits a new value, the
  // output observable stops receiving values from the other inner observables.
  getProduct(id: number): Observable<Product> {
    return this.productService.getProducts()
      // pipe to chain the observable of products with the observable returned from swithMap
      .pipe(
        // Create new inner observable for each product emitted from the source observable
      switchMap(products => {
        // check if product is null
        if (!this.product) {
          // if null
          this.product = products[id];
        }
        // 'of' -> create new inner observable for each product emitted from the source observable using the 'of' operator
        return of(this.product);
      })
    );
  }

}
