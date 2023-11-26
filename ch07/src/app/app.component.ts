import { Component } from '@angular/core';
import {count, from, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  count: number = 0;

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor() {
    this.title$.subscribe(this.setTitle);
    // this.onComplete().then(this.setTitle);
/*    const complete$ = from(this.onComplete());
    complete$.subscribe(this.setTitle);*/
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.count++;
    this.title = `Learning Angular (${timestamp}), ${this.count}`;
  }

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    // resolve parameter indicates that the promise was completed successfully or rejected
    return new Promise<void>(resolve => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

}
