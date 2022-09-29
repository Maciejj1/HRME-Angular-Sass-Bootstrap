import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent  {
  Top1 = '#Top 1 W Aplikacjach dla HR'
  welcome = 'Witaj w HRME!'
  backgroundImage = 'assets/images/welocome-mobile.png'
  constructor() { }



}
