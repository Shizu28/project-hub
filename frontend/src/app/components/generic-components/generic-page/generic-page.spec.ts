import { ComponentFixture, TestBed } from '@angular/core/testing';

import GenericPage from './generic-page';

describe('GenericPage', () => {
  let component: GenericPage;
  let fixture: ComponentFixture<GenericPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
