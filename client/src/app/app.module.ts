import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IndexHeadComponent } from './index-head/index-head.component';
import { IndexAboutmeComponent } from './index-aboutme/index-aboutme.component';
import { IndexProjectsComponent } from './index-projects/index-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatGridListResponsiveModule } from './../lib/mat-grid-list-responsive.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexHeadComponent,
    IndexAboutmeComponent,
    IndexProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatGridListModule,
    MatGridListResponsiveModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
