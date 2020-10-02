import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBannerTwoComponent } from './shop-banner-two.component';

describe('ShopBannerTwoComponent', () => {
  let component: ShopBannerTwoComponent;
  let fixture: ComponentFixture<ShopBannerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBannerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBannerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
