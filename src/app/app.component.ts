import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bruur Culinair';
  headerActive = true;
  prevScrollPos = 0;

  constructor(private router: Router) {}

  onScroll = _.throttle((e) => {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      setTimeout(() => {
        document.getElementById("header").style.transform = "translateY(0)";
      }, 1000);
    } else {
      document.getElementById("header").style.transform = "translateY(-150px)";
    }
    this.prevScrollPos = currentScrollPos;
  }, 500);

  onActivate(e) {
    if (document.body) {
      document.body.scrollTo({
        top: 0
      });
    } else {
      console.log('no document body');
    }
  }
}
