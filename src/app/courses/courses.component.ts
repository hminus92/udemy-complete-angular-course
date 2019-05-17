import { Component } from '@angular/core';
import { CoursesService } from 'app/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "List of courses";
  courses;

  constructor(courseService: CoursesService) { 
    this.courses= courseService.getCourses();
  }

  getTitle(){
    return this.title;
  }
}
