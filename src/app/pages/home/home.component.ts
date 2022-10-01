import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  icon = 'assets/images/dashboard-icon.png'
  chartDrive = 'assets/images/drive-chart.png'
  chartRadar = 'assets/images/radar-chart.png'
  chartBar = 'assets/images/Bar-chart.png'
  constructor() { }


}
