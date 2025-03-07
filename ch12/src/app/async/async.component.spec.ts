import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncComponent ]
    });

    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data with waitForAsync', waitForAsync(async() => {
    fixture.detectChanges();
    // Returns a Promise which is resolved immediately when the data$ observable is complete
    await fixture.whenStable();
    // Once Promise resolved, we call detectChanges() once more to trigger data binding and query the DOM accordingly
    fixture.detectChanges();
    const heroDisplay: HTMLElement[] = fixture.nativeElement.querySelectorAll('p');
    expect(heroDisplay.length).toBe(5);
  }));

  it('should get data with fakeAsync', fakeAsync(() => {
    fixture.detectChanges();
    tick(500);
    fixture.detectChanges();
    const heroDisplay: HTMLElement[] = fixture.nativeElement.querySelectorAll('p');
    expect(heroDisplay.length).toBe(5);
  }));
});
