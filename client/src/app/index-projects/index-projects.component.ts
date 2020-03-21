import { Component } from '@angular/core';
import { faLaravel, faPhp, faGithub } from '@fortawesome/free-brands-svg-icons';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  title: string;
  color: string;
  status: string;
  tech?: [string, string?, string?];
  repostatus?: boolean;
}

export interface Tech {
  Laravel: string,
  Php: string,
  Github: string,
}

@Component({
  selector: 'app-index-projects',
  templateUrl: './index-projects.component.html',
  styleUrls: ['./index-projects.component.css']
})
export class IndexProjectsComponent{
  faLaravel = faLaravel;
  faPhp = faPhp;
  faGithub = faGithub;

  tiles: Tile[] = [
    {title: 'JadziaOS', text: 'A simple CRM and CMS written in Laravel', status: 'early-alpha', tech: ['Laravel', 'Php'],cols: 1, rows: 3, color: '#ffffffe0', repostatus: false},
    {title: 'Gitter', text: 'Laravel REST API approach to get and process GitHub Hooks', tech: ['Laravel', 'Github'], status: 'early-alpha', cols: 1, rows: 3, color: '#ffffffe0', repostatus: false},
    {title: 'More to come', text: '...', status: 'future-plan', cols: 1, rows: 3, color: '#ffffffe0'},
  ];

  techHref: Tech = {
    Laravel: 'https://laravel.com/',
    Php: 'https://php.net/',
    Github: 'https://developer.github.com/webhooks/'
  }

  button = document.querySelectorAll('.btnTech');

  responsive = true;
  cols = 1;

  getTechColor(tech) {
    if (tech != undefined) {
      return 'primary';
    } else {
      return 'war';
    }
  }

  getTechName(tech) {
    return tech;
  }

  getTechIcon(tech) {
    return this['fa' + tech];
  }

  clickTech(tech) {
    window.open(this.techHref[tech]);
  }

}
