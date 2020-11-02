import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('this is a message.');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    return of(HEROES.find((hero: Hero) => {
      return hero.id === id;
    }));
  }

}
