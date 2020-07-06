import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaggaComponent } from './quagga.component';

describe('QuaggaComponent', () => {
  let component: QuaggaComponent;
  let fixture: ComponentFixture<QuaggaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaggaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaggaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
