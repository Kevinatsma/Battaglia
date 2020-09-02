import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { HeaderService } from './../../shared/services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    public ngZone: NgZone,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.setMenu();
  }

  setMenu() {
    const classes = [...this.headerService.defaultClasses, 'non-transparent'];
    this.headerService.setMenuClasses(classes);
  }

  googleLogin() {
    this.auth.googleSignin()
    .then(() => {
      this.ngZone.run(() => this.router.navigate(['']));
    });
  }
}
