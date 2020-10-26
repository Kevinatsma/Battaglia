import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';
import { UtilsService } from './../../shared/utils/utils.service';
import { HeaderService } from './../../shared/services/header.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  menuClasses: string[];
  heroEl: HTMLElement;
  topNav: HTMLElement;
  bannerSlogan = 'Culinair genieten verbroedert';
  heroImage = 'hero-home.jpg';
  bannerImage = 'over-ons.jpg';
  throttleDelay: number;

  constructor( private utils: UtilsService,
               private headerService: HeaderService ,
               private titleService: Title,
               private meta: Meta) {
  }

  ngOnInit() {
    this.setMenu('is-sticky');
    this.initListeners();
    this.headerService.setScrollDown(true);
    this.setPageTitle();
    this.setMetaDescription();
  }

  ngAfterViewInit() {
    this.headerService.heroEl = document.querySelector('.hero');
    this.headerService.topNav = document.getElementById('topNav');
  }

  initListeners() {
    this.throttleDelay = this.utils.isMobile() ? 150 : 300;
    window.removeEventListener('scroll', _.throttle(this.headerService.observeScroll, this.throttleDelay), true);
    window.addEventListener('scroll', _.throttle(this.headerService.observeScroll, this.throttleDelay), true);
  }

  setMenu(cssClass: string) {
    const classes = [...this.headerService.defaultClasses, cssClass];
    this.headerService.setMenuClasses(classes);
  }

  setPageTitle() {
    this.titleService.setTitle('Battaglia | Home');
  }

  setMetaDescription() {
    this.meta.updateTag({
      name: 'description',
      content: `Content`
    });
  }

  checkScroll = _.throttle((e) => {
    // console.log('scrolling', e);
    // TODO - section scroll on scroll down/up (100vh each time);
  });

  ngOnDestroy() {
    window.removeEventListener('scroll', _.throttle(this.headerService.observeScroll, this.throttleDelay), true);
    this.headerService.resetMenuClasses();
  }

}
