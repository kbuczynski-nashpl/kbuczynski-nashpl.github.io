import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule }       from '@fortawesome/angular-fontawesome';
import { NgbModule }               from '@ng-bootstrap/ng-bootstrap';
import { MeCardComponent }         from './components/me-card/me-card.component';

import { MatCardModule } from "@angular/material/card";
import { NavComponent } from './components/nav/nav.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      MeCardComponent,
      NavComponent,
      ProjectsCardComponent
    ],
    imports:      [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FontAwesomeModule,
      NgbModule,
      MatCardModule
    ],
    providers:    [],
    bootstrap:    [AppComponent]
  }
)
export class AppModule {
}
