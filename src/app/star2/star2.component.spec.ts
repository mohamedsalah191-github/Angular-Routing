import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Star2Component } from './star2.component';

describe('Star2Component', () => {
  let component: Star2Component;
  let fixture: ComponentFixture<Star2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Star2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Star2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
