import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenzcoHotelComponent } from './jenzco-hotel.component';

describe('JenzcoHotelComponent', () => {
  let component: JenzcoHotelComponent;
  let fixture: ComponentFixture<JenzcoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenzcoHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JenzcoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
