import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathexpComponent } from './mathexp.component';

describe('MathexpComponent', () => {
  let component: MathexpComponent;
  let fixture: ComponentFixture<MathexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
