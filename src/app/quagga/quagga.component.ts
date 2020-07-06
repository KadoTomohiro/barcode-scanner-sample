import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quagga',
  templateUrl: './quagga.component.html',
  styleUrls: ['./quagga.component.css']
})
export class QuaggaComponent implements OnInit {

  code: string;
  ngOnInit(): void {
  }
  read(code: string) {
    this.code = code;
  }
}
