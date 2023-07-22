import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChildOneComponent } from './child-child-one.component';

describe('ChildChildOneComponent', () => {
  let component: ChildChildOneComponent;
  let fixture: ComponentFixture<ChildChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildChildOneComponent]
    });
    fixture = TestBed.createComponent(ChildChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
