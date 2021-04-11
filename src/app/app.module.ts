import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { DisplaymoviesDirective } from './displaymovies.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DisplaymoviesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
