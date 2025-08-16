import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProductPageComponent } from './buyer-product-page.component';

describe('BuyerProductPageComponent', () => {
  let component: BuyerProductPageComponent;
  let fixture: ComponentFixture<BuyerProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerProductPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
