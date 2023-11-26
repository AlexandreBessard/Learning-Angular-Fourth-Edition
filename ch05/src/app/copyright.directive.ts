import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  // ElementRef -> acess and manipulate the underlying HTML element attached to the directive.
  constructor(el: ElementRef) {
    console.log(el);
    const currentYear = new Date().getFullYear();
    // Get the actual native HTML element
    const targetEl: HTMLElement = el.nativeElement;
    console.log(targetEl);
    targetEl.classList.add('copyright');
    targetEl.textContent = `Copyright ©${currentYear} All Rights Reserved.`;
  }

}
