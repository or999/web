import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectHero: Hero;
  selectId: number;
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    // 生命周期钩子，组件创建完后调用，放初始化逻辑
    this.getHeroes();
    this.getParams();
  }
  onSelect(hero: Hero): void {
    this.selectHero = hero;
    this.selectId = hero.id;
    this.messageService.addMessage(`you are selected id ${hero.id}
    name ${hero.name} hero`);

  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  getParams(): void {
    this.route.paramMap.subscribe(
     params => {
        console.log(params.keys);
        this.selectId = +params.get('id');
        return this.heroService.getHeroes();
      }
      );
  }

}
