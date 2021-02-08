import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { FeespaymentComponent } from '../feespayment/feespayment.component';
import { GamessportsComponent } from '../gamessports/gamessports.component';
import { HostelsComponent } from '../hostels/hostels.component';
import { UserFace } from '../models/user.model';
import { SharedService } from '../sharedServices/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //public user;
  userName :string;
  componentRef: any;
  @ViewChild('dynamicLoadComponent', {read: ViewContainerRef}) entry: ViewContainerRef;

  value=[
    {
    "Id":1,
    "Name":"Courses"
  },
  {
    "Id":2,
    "Name":"Hostels"
  },
  {
    "Id":3,
    "Name":"Fees & Payment"
  },
  {
    "Id":4,
    "Name":"Games"
  }
  ]
  constructor(private resolver: ComponentFactoryResolver, private _sharedService : SharedService,
    private _router : Router
    ) {
    var user = this._sharedService.getLoggedInUser();
    this.userName = user.username;
   }
  
  ngOnInit(): void {
    
  }
  
  createComponent(Id){
    this.entry.clear();
    if(Id==1)
    {
      const factory = this.resolver.resolveComponentFactory(CoursesComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
    else if(Id == 2)
    {
      const factory = this.resolver.resolveComponentFactory(HostelsComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
    else if(Id == 3)
    {
      const factory = this.resolver.resolveComponentFactory(FeespaymentComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
    else if(Id == 4)
    {
      const factory = this.resolver.resolveComponentFactory(GamessportsComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
  }
  selectTheComponent(id: number)
  {
    this.createComponent(id);
  }

  hostelsClick(){
    this._router.navigate(['./hostels']);
  }
  gamessportsClick(){
    this._router.navigate(['./gamessports']);
  }
  coursesClick(){
    this._router.navigate(['./courses']);
  }
  fundTransferClick(){
    this._router.navigate(['./feespayment']);
  }  
  libraryClick(){
    this._router.navigate(['./library']);
  }

}