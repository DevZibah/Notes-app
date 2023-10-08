import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenzcoHotelFooterComponent } from './jenzco-hotel-footer.component';

describe('JenzcoHotelFooterComponent', () => {
  let component: JenzcoHotelFooterComponent;
  let fixture: ComponentFixture<JenzcoHotelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenzcoHotelFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JenzcoHotelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
