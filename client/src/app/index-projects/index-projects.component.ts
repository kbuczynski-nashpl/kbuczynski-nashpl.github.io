import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  title: string;
  color: string;
}

@Component({
  selector: 'app-index-projects',
  templateUrl: './index-projects.component.html',
  styleUrls: ['./index-projects.component.css']
})
export class IndexProjectsComponent{
  tiles: Tile[] = [
    {title: 'JadziaOS', text: 'One', cols: 1, rows: 3, color: '#ffffffe0'},
    {title: 'One', text: 'Two', cols: 1, rows: 3, color: '#ffffffe0'},
    {title: 'One', text: 'Three', cols: 1, rows: 3, color: '#ffffffe0'},
    {title: 'One', text: 'Four', cols: 1, rows: 3, color: '#ffffffe0'},
  ];

  responsive = true;
  cols = 1;

}
