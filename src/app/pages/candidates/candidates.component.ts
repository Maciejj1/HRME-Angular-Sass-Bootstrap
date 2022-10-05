import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CANDIDATES} from "../database/database";
import {Candidate} from "../database/candidate";

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent  {
icon = 'assets/images/candidates-icon.svg'
user = 'assets/images/user.png'
  candidates: Candidate[] = CANDIDATES;
  @Output () newCandidate = new EventEmitter<Candidate>();
  candidate: Candidate={ id: 0,date: '', cv: '', phone: '', surname: '', name: '', language: '', position: '', availability: '', experience: 0, category: '', email: '', adopted: '' }

  constructor() { }
  onNewCandidate(candidate : Candidate){
    this.candidates.unshift(candidate)
  }
deleteCandidate(id: number){
    this.candidates = this.candidates.filter((u)=> u.id !==id)
}

}
