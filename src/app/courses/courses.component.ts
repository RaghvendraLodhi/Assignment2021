import { Component, OnInit } from '@angular/core';
import { ColserviceService } from '../colservice.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses =[];
  showCourseDetails = false;
  constructor(private _collegeService: ColserviceService) { }

  ngOnInit(): void {
    this.courses = this._collegeService.getCourses();
  }
  showCourse(){
    this.showCourseDetails = !this.showCourseDetails;
  }

}
