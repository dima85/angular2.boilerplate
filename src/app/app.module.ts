import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompComponent } from './components/comp/comp.component';


@NgModule({
  imports:      [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    CompComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
