import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { IndexHeadComponent } from './index-head/index-head.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { IndexHeadContentComponent } from './index-head-content/index-head-content.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexHeadComponent,
    IndexContentComponent,
    IndexHeadContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
