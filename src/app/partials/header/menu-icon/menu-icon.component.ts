import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements AfterViewInit {
  @Input() menuActive: BehaviorSubject<boolean>;
  @Input() blackMenu$: Subject<boolean>;
  @ViewChild('menuIcon', {static: false}) menuIcon: HTMLElement;

  constructor() {

  }

  ngAfterViewInit() {
    this.menuIcon = document.getElementById('a1');
    if (this.menuIcon) {
      this.beginAnimation(this.menuIcon, 900);
    }
  }

  beginAnimation(el, timeout: number) {
    setTimeout(() => {
      el.beginElement();
    }, timeout);
  }

}
