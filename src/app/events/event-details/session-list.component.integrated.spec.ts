import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AuthService } from "src/app/user/auth.service"
import { voterService } from "."
import { DurationPipe } from "../shared"
import { SessionListComponent } from "./session-list.component"


describe('SessionListComponent', ()=> {

    let mockAuthService,
        mockVoterService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                DurationPipe
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService},
                { provide: voterService, useValue: mockVoterService}
            ]
        });

        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', ()=> {

        it('should have the corect title', () =>{
            component.sessions = [
                {name: 'Session 1', id: 3, presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', 
                voters: ['John', 'bob']}
            ]
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;
            component.ngOnChanges();

            fixture.detectChanges();
        })
    })
})