import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
  voterService,
  LocationValidator
} from "./events/index";

import { 
  JQ_TOKEN, 
  TOASTER_TOKEN, 
  Toastr, 
  CollapsibleWellComponent, 
  SimpleModalComponent,
  ModalTriggerDirective } from "./common/index";


import { EventsAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CollapsibleWellComponent } from './common/collapsible-well.component';

// declare let toastr:Toastr
let toastr:Toastr = window['toastr'];
let jQuery:Toastr = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    LocationValidator
  ],
  providers: [
    EventService,
    { provide: TOASTER_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    EventRouteActivator,
    EventListResolver,
    AuthService,
    voterService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true  
}