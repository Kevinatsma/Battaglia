import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as _ from 'lodash';
import { UtilsService } from '../utils/utils.service';
import { ElementInView } from '../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  defaultClasses = ['navigation', 'is-sticky'];
  menuActive$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showScrollDown$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  menuClasses: string[];
  menuClasses$: BehaviorSubject<string[]> = new BehaviorSubject(this.defaultClasses);
  topNav: any;
  stopHeaderRef: ElementRef;
  heroEl: any;

  constructor( private utils: UtilsService) {
  }

  observeScroll = (event: any): void => {
    const target = _.get(this.stopHeaderRef, 'nativeElement');
    const clientRect = this.utils.getClientRect(target);
    const elementInView = this.utils.isElementInView(clientRect, this.utils.getScreen());
    this.checkMenuClasses(elementInView);
  }

  toggleMenu() {
    this.menuActive$.next(!_.get(this.menuActive$, 'value'));
  }

  setMenuActive(isActive: boolean) {
    this.menuActive$.next(isActive);
  }

  resetMenuClasses() {
    this.menuClasses$.next([...this.defaultClasses]);
  }

  setMenuClasses(classes: string[]) {
    this.menuClasses$.next(classes);
  }

  setScrollDown(isActive: boolean) {
    this.showScrollDown$.next(isActive);
  }

  checkMenuClasses(elementInView: ElementInView) {
    const classes = [...this.defaultClasses, 'non-transparent'];
    const heroEl = document.querySelector('.hero');
    const heroRect = this.utils.getClientRect(heroEl);
    const heroInView = this.utils.isElementInView(heroRect, this.utils.getScreen());
    let containsClasses;
    containsClasses = this.utils.compareClasses(this.topNav.classList, this.defaultClasses);

    if (!_.isNil(heroInView)) {
      if (heroInView.partially || heroInView.half || heroInView.fully) {
        if (!containsClasses) {
          this.resetMenuClasses();
          this.menuClasses = this.defaultClasses;
        }
      } else {
        containsClasses = this.utils.compareClasses(this.topNav.classList, classes);
        if (!containsClasses) {
          this.setMenuClasses(classes);
          this.menuClasses = classes;
        }
      }
      if (heroInView.fully || heroInView.half || heroInView.partially) {
        if (this.showScrollDown$.value === false) {
          this.showScrollDown$.next(true);
        }
      } else {
        if (this.showScrollDown$.value === true) {
          this.showScrollDown$.next(false);
        }
      }
    }
  }
}
