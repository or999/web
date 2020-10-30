import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    // tslint:disable-next-line: whitespace
    name:'Windstorm'
};
  constructor() { }

  ngOnInit(): void {
    // 生命周期钩子，组件创建完后调用，放初始化逻辑
  }
  change(): void {
    console.log(this.hero.name);
  }

}
