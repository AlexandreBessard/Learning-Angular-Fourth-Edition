import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // apply th CSS also on parent component
  encapsulation: ViewEncapsulation.None,
  // trigger the change detection only when the reference of the name input property is changes.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges, OnInit, OnChanges {

  @Input()
  name = '';

  @Output()
  bought = new EventEmitter();

  constructor() {
    console.log(`Name is ${this.name} in constructor`);
  }

  ngOnInit(): void {
    console.log('Name is ${this.name} in the ngOnInit');
  }

  // parameter that contains one key for each input property that changes
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  get productName(): string {
    console.log('Get ${this.name}');
    return this.name;
  }

  buy() {
    this.bought.emit();
  }

}
