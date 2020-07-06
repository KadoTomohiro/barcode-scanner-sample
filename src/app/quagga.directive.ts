import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import Quagga from 'quagga';

@Directive({
  selector: '[appQuagga]'
})
export class QuaggaDirective {

  @Output('appQuagga') read = new EventEmitter<string>();

  private isbnHeader = [978, 979];
  constructor(private el: ElementRef) {
    this.init(el.nativeElement);
  }

  init(target: Element) {
    Quagga.init(
      {
        inputStream : {
          name : "Live",
          type : "LiveStream",
          // @ts-ignore
          target: target    // Or '#yourElement' (optional)
        },
        decoder : {
          readers : ["ean_reader"]
        }
      },
      (err) => {
        if (err) {
          console.log(err)
        }
        Quagga.start();
      }
    )

    Quagga.onDetected(success => {
      const code = success.codeResult.code;
      if (this.isIsbn(code)) {
        this.read.emit(code);
      }
    })
  }

  isIsbn(code: string): boolean {
    const regex = new RegExp(`^(${this.isbnHeader.join('|')})\\d{10}$`);
    return regex.test(code);
  }

}
