import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremaComponent } from './crema.component';

describe('CremaComponent', () => {
  let component: CremaComponent;
  let fixture: ComponentFixture<CremaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CremaComponent]
    });
    fixture = TestBed.createComponent(CremaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
