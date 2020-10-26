import { Component, OnInit } from '@angular/core';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faDribbble, faGithub, faMedium, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faDribbble = faDribbble;
  faGithub = faGithub;
  faMedium = faMedium;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  constructor() { }
  ngOnInit() {
  }
}