import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeroesDetailsComponent } from './top-heroes-details.component';

describe('TopHeroesDetailsComponent', () => {
  let component: TopHeroesDetailsComponent;
  let fixture: ComponentFixture<TopHeroesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeroesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeroesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
