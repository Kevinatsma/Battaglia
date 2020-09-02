import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appImageLoader]'
})
export class ImageLoaderDirective {
  @Input() appImageLoader;
  el: any;

  constructor(private inputElement: ElementRef) {
    this.el = this.inputElement.nativeElement;
    this.el.style.backgroundImage =
      'url(https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)';

    const image = new Image();
    image.addEventListener('load', () => {
      this.el.style.backgroundImage = `url(${this.appImageLoader})`;
    });
    image.src = this.appImageLoader;
  }
}
