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

  constructor(private router: Router) {
    // this.listenToRouteChange();
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
