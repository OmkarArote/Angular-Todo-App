import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faFacebookF, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  githubIcon = faGithub;
  linkedinIcon = faLinkedinIn;
  instagramIcon = faInstagram;
  facebookIcon = faFacebookF;
  constructor() {
  }

  ngOnInit(): void {
  }

}
