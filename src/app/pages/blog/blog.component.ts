import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../shared/services/header.service';
import { UtilsService } from './../../shared/utils/utils.service';
import { Title, Meta } from '@angular/platform-browser';
import * as _ from 'lodash';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class BlogComponent implements OnInit {
  heroImage = 'hero-blog.jpg';

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
    this.titleService.setTitle('Battaglia | Blog');
  }

  setMetaDescription() {
    this.meta.updateTag({
      name: 'description',
      content: `test content`
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.headerService.observeScroll, true);
    this.headerService.resetMenuClasses();
  }
}
