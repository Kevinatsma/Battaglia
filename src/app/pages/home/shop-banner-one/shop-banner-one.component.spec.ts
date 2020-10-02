import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBannerOneComponent } from './shop-banner-one.component';

describe('ShopBannerOneComponent', () => {
  let component: ShopBannerOneComponent;
  let fixture: ComponentFixture<ShopBannerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBannerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBannerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
