import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenzcoFormListComponent } from './jenzco-form-list.component';

describe('JenzcoFormListComponent', () => {
  let component: JenzcoFormListComponent;
  let fixture: ComponentFixture<JenzcoFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JenzcoFormListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JenzcoFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
