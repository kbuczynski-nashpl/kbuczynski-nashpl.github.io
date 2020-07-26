import { Component, OnInit }                 from '@angular/core';
import { TopNav }                            from "../../interfaces/top-nav";
import { faTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

@Component(
  {
    selector:    'app-nav',
    templateUrl: './nav.component.html',
    styleUrls:   ['./nav.component.scss']
  }
)
export class NavComponent implements OnInit {
  topNav: TopNav[];
  faTwitter: any;
  faGitHub: any;
  faLinkedIn: any;


  constructor() {
  }

  ngOnInit(): void {
    this.topNav = [
      {
        name: 'Twitter',
        icon: faTwitter,
        href: 'https://twitter.com/NashPL'
      },
      {
        name: 'GitHub',
        icon: faGithub,
        href: 'https://github.com/kbuczynski-nashpl',
      },
      {
        name: 'LinkedIn',
        icon: faLinkedinIn,
        href: 'https://www.linkedin.com/in/krzysztof-buczynski-59008b152/',
      }
    ]
  }
}
