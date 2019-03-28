import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
@HostListener('focus') 
onFocus(){
console.log('it is on Focus');
}
@HostListener('blur')
onblur()
{
  let varas:string  =this.el.nativeElement.value; 
  console.log(varas);
  this.el.nativeElement.value = varas.toUpperCase(); 
  console.log('it is on blur');
  console.log(this.el.nativeElement.value);
  
}

  constructor(private el: ElementRef) { }

}
