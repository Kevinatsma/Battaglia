import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { UtilsService } from './../../shared/utils/utils.service';
import { HeaderService } from './../../shared/services/header.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() classes: string[];
  @Input() height = 100;
  @Input() sectionToScrollTo: string;
  @Input() image: string;
  @Input() heroTitle: string;
  assetPath = '../../../assets/img/backgrounds/';
  scrollButtonActive: boolean;
  destroy$: Subject<boolean> = new Subject();

  constructor( private utils: UtilsService,
               private headerService: HeaderService,
               private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.initObservables();
    this.setImage(this.image);
  }


  setImage(image: string) {
    const imagePath = this.assetPath + image;
    this.image = imagePath;
  }

  initObservables() {
    this.headerService.showScrollDown$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(isActive => {
      this.scrollButtonActive = isActive;
    });
  }

  scrollDown(e, section: string) {
    this.utils.smoothScroll(section, e, true);
  }
}
