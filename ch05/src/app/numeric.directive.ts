import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {

  // This binds a value to the property of the native host element
  @HostBinding('class')
  currentClass = '';

  // This binds to an event of the native host element
  // onKeyPress to bind the keypress native element of the input element
  // keypress -> eventName: The name of the triggered event, args -> a list of arguments to pass in the appropriate method upon triggering the event
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    // can only type numerical value
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.currentClass = 'invalid';
      event.preventDefault();
    } else {
      this.currentClass = 'valid';
    }
  }

  constructor() { }

}
