import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bruur Culinair';
  headerActive = true;
  prevScrollPos = 0;

  constructor(private router: Router) {
  }

  onScroll(event) {
    console.log(event);
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      console.log('top nav 0', document.getElementById("topNav"));
    } else {
      setTimeout(() => {
        document.getElementById("header").style.top = "-150px";
        console.log('top nav min vijftig', document.getElementById("topNav"));
      }, 1000);
    }
    this.prevScrollPos = currentScrollPos;
  }

  // listenToRouteChange() {
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //         return;
  //     }
  //     window.scrollTo(0, 0);
  // });
  // }

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
