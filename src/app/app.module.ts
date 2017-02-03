
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { TwitsComponent } from './twits/twits.component';

import { TwitsService } from './twits.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'twits',
    pathMatch: 'full'
  },
  {
    path: 'twits',
    component: TwitsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TwitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    InfiniteScrollModule
  ],
  providers: [TwitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
