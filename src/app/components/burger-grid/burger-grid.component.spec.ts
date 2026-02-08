import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerGridComponent } from './burger-grid.component';

describe('BurgerGridComponent', () => {
  let component: BurgerGridComponent;
  let fixture: ComponentFixture<BurgerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
