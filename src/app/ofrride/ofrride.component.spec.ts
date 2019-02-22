import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrrideComponent } from './ofrride.component';

describe('OfrrideComponent', () => {
  let component: OfrrideComponent;
  let fixture: ComponentFixture<OfrrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfrrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfrrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
