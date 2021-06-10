import { of } from "rxjs";
import { ISession } from "../shared";
import { voterService } from "./voter.service"

describe('VoterService', ()=> {

    let VoterService: voterService,
        mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        VoterService = new voterService(mockHttp);
    });

    describe('deleteVoter',() => {
        it('should remove the voter from the list of voters', ()=>{
            var session = { id: 6, voters: ["joe", "john"]};
            mockHttp.delete.and.returnValue(of(false));

            VoterService.deleteVoter(3, <ISession>session, "joe");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        })
    })



})