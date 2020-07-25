import { Component, OnInit }                                          from '@angular/core';
import { faGithub, faLinkedinIn, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

@Component(
  {
    selector:    'me-card',
    templateUrl: './me-card.component.html',
    styleUrls:   ['./me-card.component.scss']
  }
)
export class MeCardComponent implements OnInit {
  faGithub: any;
  faLinkedIn: any;
  faTwitter: any;
  faFacebook: any;
  faInstagram: any;

  constructor() {
  }

  ngOnInit(): void {
    this.faGithub    = faGithub;
    this.faLinkedIn  = faLinkedinIn;
    this.faTwitter   = faTwitter;
    this.faFacebook  = faFacebook;
    this.faInstagram = faInstagram;
  }

}
