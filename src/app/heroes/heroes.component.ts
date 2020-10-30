import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectHero: Hero;
  herors: Hero[] = HEROES;
  constructor() { }
  ngOnInit(): void {
    // 生命周期钩子，组件创建完后调用，放初始化逻辑
  }
  change(): void {
    // console.log(this.hero.name);
  }
  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

}
