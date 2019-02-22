import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkngrideComponent } from './lkngride.component';

describe('LkngrideComponent', () => {
  let component: LkngrideComponent;
  let fixture: ComponentFixture<LkngrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkngrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkngrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
