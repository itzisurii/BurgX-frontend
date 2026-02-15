import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeawaysidebarComponent } from './takeawaysidebar.component';

describe('TakeawaysidebarComponent', () => {
  let component: TakeawaysidebarComponent;
  let fixture: ComponentFixture<TakeawaysidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeawaysidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeawaysidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
