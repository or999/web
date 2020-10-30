import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  ngOnInit(): void {
    // 生命周期钩子，组件创建完后调用，放初始化逻辑
    this.getHeroes();
  }
  change(): void {
    // console.log(this.hero.name);
  }
  onSelect(hero: Hero): void {
    this.selectHero = hero;
    this.messageService.addMessage(`you are selected id ${hero.id}
    name ${hero.name} hero`);

  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
