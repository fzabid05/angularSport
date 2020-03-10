import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitesComponent } from './activites/activites.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PlanningComponent } from './planning/planning.component';
import { ContactComponent } from './contact/contact.component';
import { DetailCoachComponent } from './detail-coach/detail-coach.component';
import { ActiviteDetailComponent } from './activite-detail/activite-detail.component';
import { PlanSiteComponent } from './plan-site/plan-site.component';
import { CoachComponent } from './coach/coach.component';
import { OffresComponent } from './offres/offres.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activites', component: ActivitesComponent },
  { path:'activite-detail/:id', component: ActiviteDetailComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'planning', component:PlanningComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'detail-coach/:id', component:DetailCoachComponent },
  { path: 'plan-site', component:PlanSiteComponent },
  { path:'coach', component:CoachComponent },
  { path:'offres', component:OffresComponent },
  { path: 'posts', component:PostsComponent },
  { path: 'post/:id', component:PostComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
