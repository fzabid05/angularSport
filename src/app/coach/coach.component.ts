import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import { Coach } from '../coach';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {
  coachs :Coach[];
  constructor( private coachService : CoachService) { }

  ngOnInit() {
    this.getCoachs();
  }
  getCoachs():void{
    this.coachs = this.coachService.getCoachs();
  }
}
