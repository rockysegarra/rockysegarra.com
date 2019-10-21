import { Component, OnInit } from '@angular/core';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faDribbble, faGithub, faMedium, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
