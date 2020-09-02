import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parallax-banner',
  templateUrl: './parallax-banner.component.html',
  styleUrls: ['./parallax-banner.component.scss']
})
export class ParallaxBannerComponent implements OnInit {
  @Input() image: string;
  @Input() bannerSlogan: string;
  assetPath = '../../../assets/img/backgrounds/';
  imageURL: string;

  constructor( private router: Router) {
  }

  ngOnInit() {
    this.setImage(this.image);
  }

  setImage(image: string) {
    const imagePath = this.assetPath + image;
    this.imageURL = imagePath;
  }

  goToAboutUs() {
    this.router.navigate(['over-ons']);
  }

}
