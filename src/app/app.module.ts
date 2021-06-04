import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { ActorsService } from "./services/actors.service";

import { AppComponent } from './app.component';
import { ActorsComponent } from "./components/actors/actors.component";
import { ActorsV2Component } from './components/actors-v2/actors-v2.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ActorsV2Component,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ActorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
