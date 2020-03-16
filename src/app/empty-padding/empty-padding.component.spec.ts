import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPaddingComponent } from './empty-padding.component';

describe('EmptyPaddingComponent', () => {
  let component: EmptyPaddingComponent;
  let fixture: ComponentFixture<EmptyPaddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyPaddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
