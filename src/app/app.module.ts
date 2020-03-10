import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitesComponent } from './activites/activites.component';
import { ActiviteDetailComponent } from './activite-detail/activite-detail.component';
import { ActiviteService } from './activite.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PlanningComponent } from './planning/planning.component';
import { ContactComponent } from './contact/contact.component';
import { DetailCoachComponent } from './detail-coach/detail-coach.component';
import { CoachComponent } from './coach/coach.component';
import { PlanSiteComponent } from './plan-site/plan-site.component';
import { OffresComponent } from './offres/offres.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitesComponent,
    ActiviteDetailComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PresentationComponent,
    PlanningComponent,
    ContactComponent,
    DetailCoachComponent,
    CoachComponent,
    PlanSiteComponent,
    OffresComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ActiviteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
