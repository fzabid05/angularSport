import { Injectable } from '@angular/core';
import { COACHS } from './mock-coachs';
import { Observable, of } from 'rxjs';
import { Coach } from './coach';
@Injectable({
  providedIn: 'root'
})
export class CoachService {
  
 
  constructor() { }
  getCoachs(): Coach[]{
    return COACHS;
  }
  getCoach(id: number): Observable<Coach> {
    return of(COACHS.find(coach => coach.id === id));
  }
}
