import { Component, OnInit, Input } from '@angular/core';
import { Activite } from '../activite';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../activite.service';

@Component({
  selector: 'app-activite-detail',
  templateUrl: './activite-detail.component.html',
  styleUrls: ['./activite-detail.component.scss']
})
export class ActiviteDetailComponent implements OnInit {
activite: Activite;
  constructor( private route: ActivatedRoute, 
                private activiteService: ActiviteService
              ) { }

    ngOnInit(): void {
      this.getActivite();
    }
    getActivite(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.activiteService.getActivite(id)
        .subscribe(activite => this.activite = activite);
  }
 
}
