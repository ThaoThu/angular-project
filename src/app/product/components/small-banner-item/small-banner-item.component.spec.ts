import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBannerItemComponent } from './small-banner-item.component';

describe('SmallBannerItemComponent', () => {
  let component: SmallBannerItemComponent;
  let fixture: ComponentFixture<SmallBannerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBannerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBannerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
