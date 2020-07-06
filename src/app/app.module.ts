import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuaggaDirective } from './quagga.directive';
import { QuaggaComponent } from './quagga/quagga.component';

@NgModule({
  declarations: [
    AppComponent,
    QuaggaDirective,
    QuaggaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
