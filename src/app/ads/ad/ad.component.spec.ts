import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdComponent } from './ad.component';

describe('ItemComponent', () => {
  let component: AdComponent;
  let fixture: ComponentFixture<AdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
