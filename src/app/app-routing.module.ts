import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './user/login/login.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    data: { state: 'Website - Homepage' }
  },
  {
    path: 'shop',
    component: ShopComponent,
    data: { state: 'Website - Shop' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { state: 'Website - Blog' }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { state: 'Website - About us' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'Website - Login' }
  },
  { path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
