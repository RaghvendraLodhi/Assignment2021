import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import {NavbarComponent} from './navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { ActivateGuard } from './activate.guard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { FeespaymentComponent } from './feespayment/feespayment.component';
import { HostelsComponent } from './hostels/hostels.component';
import { GamessportsComponent } from './gamessports/gamessports.component';
import { LibraryComponent } from './library/library.component';
const routes : Routes=[
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'register',
    component:AuthComponent
  },
  {
    path:'login',
    component:AuthComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'courses',
    component:CoursesComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'feespayment',
    component:FeespaymentComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'hostels',
    component:HostelsComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'gamessports',
    component:GamessportsComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'library',
    component:LibraryComponent,
    canActivate:[ActivateGuard]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    CoursesComponent,
    HomeComponent,
    FeespaymentComponent,
    HostelsComponent,
    GamessportsComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
