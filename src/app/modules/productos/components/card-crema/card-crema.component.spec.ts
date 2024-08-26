import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCremaComponent } from './card-crema.component';

describe('CardCremaComponent', () => {
  let component: CardCremaComponent;
  let fixture: ComponentFixture<CardCremaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCremaComponent]
    });
    fixture = TestBed.createComponent(CardCremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
