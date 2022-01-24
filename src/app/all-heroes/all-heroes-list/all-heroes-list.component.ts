import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero/hero.model';

@Component({
  selector: 'app-all-heroes-list',
  templateUrl: './all-heroes-list.component.html',
  styleUrls: ['./all-heroes-list.component.css']
})
export class AllHeroesListComponent implements OnInit {
  heroes: Hero[] = [new Hero(1, 'Magnus Carlsen', '../../assets/img/heroes/Magnus_Carlsen.jpg', true, 'You need to have that edge, you need to have that confidence, you need to have that absolute belief that you\'re the best and that you\'ll win every time',['World Chess Champions']),
                    new Hero(2, 'Magnus MOROZOVICH', '../../assets/img/heroes/Magnus_Carlsen.jpg', true,'',['World Chess Champions']),
                    new Hero(3, 'Magnus Carlsen', '../../assets/img/heroes/Magnus_Carlsen.jpg', true,'You need to have that edge, you need to have that confidence, you need to have that absolute belief that you\'re the best and that you\'ll win every time',['World Chess Champions']),
                    new Hero(4, 'Magnus Carlsen', '../../assets/img/heroes/Magnus_Carlsen.jpg', false, 'Without the element of enjoyment, it is not worth trying to excel at anything',['World Chess Champions']),
                    new Hero(5, 'Magnus Carlsen', '../../assets/img/heroes/Magnus_Carlsen.jpg', true, 'You need to have that edge, you need to have that confidence, you need to have that absolute belief that you\'re the best and that you\'ll win every time',['World Chess Champions']),  
                    new Hero(6, 'Magnus Carlsen', '../../assets/img/heroes/Magnus_Carlsen.jpg', false, 'You need to have that edge, you need to have that confidence, you need to have that absolute belief that you\'re the best and that you\'ll win every time',['World Chess Champions']),  
                    new Hero(7, 'Magnus Carlsen', '../../assets/img/heroes/Magnus_Carlsen.jpg', false, 'You need to have that edge, you need to have that confidence, you need to have that absolute belief that you\'re the best and that you\'ll win every time',['World Chess Champions']),
                    ];

  constructor() { }

  ngOnInit(): void {
  }

}
