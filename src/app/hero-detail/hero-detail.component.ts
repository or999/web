import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectHero: Hero;
  editName: string;
  constructor() { }
  ngOnInit(): void {
    // this.editName = this.selectHero.name || '';
  }

  change(): void {
    console.log('正在修改英雄的名字');
  }

}
