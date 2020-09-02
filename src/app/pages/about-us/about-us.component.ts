import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HeaderService } from './../../shared/services/header.service';
import { UtilsService } from './../../shared/utils/utils.service';
import * as _ from 'lodash';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit, OnDestroy {
  heroImage = 'hero-about-us.jpg';

  constructor( private headerService: HeaderService,
               private utils: UtilsService,
               private titleService: Title,
               private meta: Meta) { }

  ngOnInit() {
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
    const throttleDelay = this.utils.isMobile() ? 150 : 300;
    window.removeEventListener('scroll', _.throttle(this.headerService.observeScroll, throttleDelay), true);
    window.addEventListener('scroll', _.throttle(this.headerService.observeScroll, throttleDelay), true);
  }

  setMenu() {
    const classes = [...this.headerService.defaultClasses, 'non-transparent'];
    this.headerService.setMenuClasses(classes);
  }

  setPageTitle() {
    this.titleService.setTitle('Battaglia | About Us');
  }

  setMetaDescription() {
    this.meta.updateTag({
      name: 'description',
      content: `content`
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.headerService.observeScroll, true);
    this.headerService.resetMenuClasses();
  }
}
