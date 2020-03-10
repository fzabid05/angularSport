import { Component, OnInit } from '@angular/core';
import { Coach } from '../coach';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from '../coach.service';


@Component({
  selector: 'app-detail-coach',
  templateUrl: './detail-coach.component.html',
  styleUrls: ['./detail-coach.component.scss']
})
export class DetailCoachComponent implements OnInit {
  coach: Coach;
  constructor( private route: ActivatedRoute,
              private coachService: CoachService ) { }

  ngOnInit(): void {
    this.getCoach();
  }
  getCoach(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.coachService.getCoach(id)
      .subscribe(coach => this.coach = coach);
  }

}
