import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Candidate} from "../database/candidate";

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent {
icon = 'assets/images/add-candidate-icon.svg'
  @Output () newCandidate = new EventEmitter<Candidate>();
  candidate: Candidate={ id: 0, date: '', cv: '', phone: '', surname: '', name: '', language: '', position: '', availability: '', experience: 0, category: '', email: '', adopted: '' }
addCandidate(){
  this.newCandidate.emit(this.candidate)
  this.candidate = { id: 0, date: '', cv: '', phone: '', surname: '', name: '', language: '', position: '', availability: '', experience: 0, category: '', email: '', adopted: '' }
}
}
