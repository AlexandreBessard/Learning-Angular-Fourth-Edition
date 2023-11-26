import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent
  // HTML template of the components has been initialized, or templates of all child components have been initialized
  implements AfterViewInit {

  selectedProduct = 'Microphone';

  // query component child from the parent component
  @ViewChild(ProductDetailComponent)
  productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    // not null
    if (this.productDetail) {
      console.log("-----> ");
      console.log(this.productDetail.name);
    }
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct}!`);
  }

}
