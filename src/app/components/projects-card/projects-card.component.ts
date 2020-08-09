import { Component, OnInit }                                                      from '@angular/core';
import { Projects }                                                               from "../../interfaces/projects";
import { faPhp, faLaravel, faBootstrap, faAngular, faReact, faNodeJs, faDiscord } from "@fortawesome/free-brands-svg-icons";

@Component(
  {
    selector:    'projects-card',
    templateUrl: './projects-card.component.html',
    styleUrls:   ['./projects-card.component.scss']
  }
)
export class ProjectsCardComponent implements OnInit {
  projects: Projects[];

  constructor() {
  }

  ngOnInit(): void {
    this.projects = [
      {
        name:  'PerParson',
        desc:  'A simple CRM system with REST API',
        stack: [faPhp,
                faLaravel,
                faBootstrap],
        href:  'https://github.com/kbuczynski-nashpl/PerParson',
      },
      {
        name:  'Angular-ToDo',
        desc:  'Implementation of ToDo list using Angular',
        stack: [faAngular,
                faBootstrap],
        href:  'https://github.com/kbuczynski-nashpl/Angular-TodoList',
      },
      {
        name:  'React-Weather Widget',
        desc:  'A simple weather widget created using ReactJS',
        stack: [faReact],
        href:  'https://github.com/kbuczynski-nashpl/react-weather-widget',
      },
      {
        name:  'Discord Fishboy',
        desc:  'A Discord bot - simple game',
        stack: [faNodeJs,
                faDiscord],
        href:  'https://github.com/kbuczynski-nashpl/discord-fishboy',
      },
      {
        name:  'Wikipedia API - Use Example',
        desc:  'A simple implementation of Wikipedia API in Laravel',
        stack: [faLaravel,
                faPhp],
        href: 'https://github.com/kbuczynski-nashpl/Wikipedia-API'
      },
      {
        name:  'Angular-Login',
        desc:  'Implementation of Login/Signup page using Angular',
        stack: [faAngular,
                faBootstrap],
        href:  'https://github.com/kbuczynski-nashpl/Angular-LoginPage',
      },
    ]
  }

}
