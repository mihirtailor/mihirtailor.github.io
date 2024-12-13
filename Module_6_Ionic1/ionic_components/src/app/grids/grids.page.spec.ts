import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridsPage } from './grids.page';

describe('GridsPage', () => {
  let component: GridsPage;
  let fixture: ComponentFixture<GridsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
