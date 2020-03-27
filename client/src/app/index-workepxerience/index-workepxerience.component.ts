import { Component } from '@angular/core';

export interface Draw {
  title: string;
  position: string;
  duration?: string;
  time: string;
  period: string;
}

@Component({
  selector: 'app-index-workepxerience',
  templateUrl: './index-workepxerience.component.html',
  styleUrls: ['./index-workepxerience.component.css']
})
export class IndexWorkepxerienceComponent {
  experiences: Draw[] = [
    {title: 'BuildEmpire Ltd', time: 'Full-Time', position: 'Junior Sofware Developer', duration: 'Current', period: 'Aug 2019 - Now'},
    {title: 'Adepteo Ltd', time: 'Full-Time', position: 'Software Developer', duration: '3 Years, 10 Months', period: 'Sep 2015 - Jun 2019'}
  ];

  educations: Draw[] = [
    {title: 'The Manchester Metropolitan University', time: 'full-time', position: 'Computer Science', period: '2013 - 2018'}
  ];
}
