import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestaurantComponent } from './menu-restaurant.component';

describe('MenuRestaurantComponent', () => {
  let component: MenuRestaurantComponent;
  let fixture: ComponentFixture<MenuRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
