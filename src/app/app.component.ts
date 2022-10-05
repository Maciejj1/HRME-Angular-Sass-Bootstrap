import { Component } from '@angular/core';
import {Candidate} from "./pages/database/candidate";
import {CANDIDATES} from "./pages/database/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hrme';
  LogoImage = 'assets/images/logo.png'
  candidates: Candidate[] = CANDIDATES;
}
