import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHeroesDetailsComponent } from './all-heroes-details.component';

describe('AllHeroesDetailsComponent', () => {
  let component: AllHeroesDetailsComponent;
  let fixture: ComponentFixture<AllHeroesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHeroesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHeroesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
