import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  LogoImage = 'assets/images/logo-desktop.png'
  constructor() { }

  ngOnInit(): void {
  }

}
