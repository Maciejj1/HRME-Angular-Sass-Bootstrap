import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  DashboardIcon = 'assets/images/dashboard-icon.png'
  AccountIcon = 'assets/images/account-icon.svg'
  CandidatesIcon = 'assets/images/candidates-icon.svg'
  AddCandidateIcon = 'assets/images/add-candidate-icon.svg'
  UserIcon = 'assets/images/user-icon.png'
  constructor() { }

  ngOnInit(): void {
  }

}
