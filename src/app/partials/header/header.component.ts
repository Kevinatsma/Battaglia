import { Component, ViewChildren, QueryList, ElementRef, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { HeaderService } from './../../shared/services/header.service';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';
import { UtilsService } from './../../shared/utils/utils.service';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChildren('menuLink') menuLinks: QueryList<ElementRef>;
  @Input() isSticky = true;
  destroy$: Subject<boolean> = new Subject();
  items: NodeListOf<HTMLElement>;
  menuActive$: Subject<boolean> = new Subject();
  menuActive = false;
  menuClasses$: BehaviorSubject<string[]> = new BehaviorSubject(['']);
  blackMenu$: Subject<boolean> = new Subject();
  isBlack: boolean;

  constructor( private headerService: HeaderService,
               private cdr: ChangeDetectorRef,
               private utils: UtilsService,
               private router: Router,
               public auth: AuthService) { }

  ngOnInit() {
    this.blackMenu$.next(false);
    this.initObservables();
  }

  initObservables() {
    combineLatest(
      this.headerService.menuActive$,
      this.headerService.menuClasses$
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe(([menuActive, classes]) => {
      this.setMenuValue(menuActive);
      this.menuClasses$.next(classes);

      if (!!menuActive) {
        this.blackMenu$.next(true);
        this.cdr.detectChanges();
      } else {
        this.checkForClassesToAdd(classes);
      }
    });
  }

  checkForClassesToAdd(classes: string[]) {
    this.isBlack = _.includes(classes, 'non-transparent');
    this.blackMenu$.next(this.isBlack);
    this.cdr.detectChanges();
  }

  setMenuValue(value: boolean) {
    this.menuActive$.next(value);
    _.set(this.menuActive, value);
  }

  toggleMenu() {
    this.headerService.toggleMenu();
    this.checkIfTransparent();
  }

  smoothScroll(target: string, URL = `/`) {
    this.router.navigate([URL]);
    setTimeout(() => {
      if (target) {
        this.headerService.menuActive$.next(false);
        this.utils.smoothScroll(target, '', true);
      }
    }, 100);
  }

  checkIfTransparent() {
    const target = document.getElementById('hero');
    const heroRect = this.utils.getClientRect(target);
    const heroInView = this.utils.isElementInView(heroRect, this.utils.getScreen());
    const menuActive = _.get(this.headerService.menuActive$, 'value');

    if (heroInView) {
      if (heroInView.partially || heroInView.half || heroInView.fully && !menuActive) {
        this.headerService.setMenuClasses(this.headerService.defaultClasses);
      }
    }
  }

  goToHome() {
    this.router.navigate(['/']);
    this.headerService.setMenuActive(false);
  }
}
