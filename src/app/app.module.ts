import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { TopHeroesListComponent } from './top-heroes/top-heroes-list/top-heroes-list.component';
import { TopHeroesDetailsComponent } from './top-heroes/top-heroes-details/top-heroes-details.component';
import { SingleHeroComponent } from './hero/single-hero/single-hero.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { AllHeroesListComponent } from './all-heroes/all-heroes-list/all-heroes-list.component';
import { AllHeroesDetailsComponent } from './all-heroes/all-heroes-details/all-heroes-details.component';
import { HeroEditComponent } from './hero/hero-edit/hero-edit.component';
import { EditHeroComponent } from './hero/edit-hero/edit-hero.component';
import { ButtonHeroComponent } from './buttons/button-hero/button-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeroesComponent,
    TopHeroesListComponent,
    TopHeroesDetailsComponent,
    SingleHeroComponent,
    AllHeroesComponent,
    AllHeroesListComponent,
    AllHeroesDetailsComponent,
    HeroEditComponent,
    EditHeroComponent,
    ButtonHeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
