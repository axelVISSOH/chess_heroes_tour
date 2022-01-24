import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-single-hero',
  templateUrl: './single-hero.component.html',
  styleUrls: ['./single-hero.component.css']
})
export class SingleHeroComponent implements OnInit {
  @Input() hero!: Hero;//means that the display of sigle Hero need the input of an hero model given by its parent
  @Input() parent!: String; //The template of single-hero will depend on the parent
  constructor() { }

  ngOnInit(): void {
  }

}
