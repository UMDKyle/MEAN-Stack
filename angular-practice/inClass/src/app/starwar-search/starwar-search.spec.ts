import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarSearch } from './starwar-search';

describe('StarwarSearch', () => {
  let component: StarwarSearch;
  let fixture: ComponentFixture<StarwarSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarwarSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(StarwarSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
