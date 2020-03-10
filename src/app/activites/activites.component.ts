import { Component, OnInit } from '@angular/core';
import { Activite } from '../activite';
import { ActiviteService } from '../activite.service';
import { ACTIVITES } from '../mock-activites';
@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit {
  activites : Activite[];
  constructor(private activiteService : ActiviteService) { }

  ngOnInit() {
    this.getActivites();
    }
  // getActivite(){
  //   return ACTIVITES;
    // this.activite = this.activiteService.getActivites();
    // this.activiteService.getActivites()
    // .subscribe(activites => this.activites = activites);
  // }
  getActivites(): void {
    this.activites = this.activiteService.getActivites();
  }
}
