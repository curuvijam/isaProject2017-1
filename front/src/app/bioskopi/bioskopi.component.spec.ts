import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioskopiComponent } from './bioskopi.component';

describe('BioskopiComponent', () => {
  let component: BioskopiComponent;
  let fixture: ComponentFixture<BioskopiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioskopiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioskopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
