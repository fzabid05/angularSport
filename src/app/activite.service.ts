import { Injectable } from '@angular/core';
import { Activite } from './activite';
import { ACTIVITES } from './mock-activites';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor() { }
  getActivites(): Activite[]{
    return ACTIVITES;
  }
  getActivite(id: number): Observable<Activite> {
    // TODO: send the message _after_ fetching the hero
   //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(ACTIVITES.find(activite => activite.id === id));
  }
}
