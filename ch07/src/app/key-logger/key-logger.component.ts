import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { filter, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {

  @Input() numeric = true;
  // static means -> indicates whether the element we want to query will be available during component initialization.
  //However, there are cases where
  // an HTML element is not present initially, such as when using the NgIf directive to add it
  // conditionally. In that case, instead of setting its value to false , we can remove the second
  // parameter of the @ViewChild decorator completely
  @ViewChild('keyContainer', { static: true })
  input: ElementRef | undefined;

  keys = '';

  ngOnInit(): void {
    // fromEvent is an operators -> creates observable from the DOM event of a native HTML element.
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    logger$
      // pipe used to link and combine multiple operators separated by commas
      .pipe(
        // Convert in unicode
      map(evt => evt.key.charCodeAt(0)),
      filter(code => {
        // exclude numerical value
        if (this.numeric) {
          return (code > 31 && (code < 48 || code > 57)) === false;
        }
        return true;
      }),
      // tap -> used when we want to do something with the data emitted without modifying it.
        // convert unicode to keyboard characters
      tap(digit => this.keys += String.fromCharCode(digit))
    ).subscribe();
  }

}
