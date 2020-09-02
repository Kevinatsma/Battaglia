import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { HeaderService } from '../../shared/services/header.service';
import { UtilsService } from '../../shared/utils/utils.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss']
})
export class ShopComponent implements OnInit {
  heroImage = 'hero-shop.jpg';

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
    this.titleService.setTitle('Asecan | Shop');
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
