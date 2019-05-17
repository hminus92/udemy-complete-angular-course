import { Component } from '@angular/core';
import { AuthorsService } from 'app/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html'
})

export class AuthorsComponent {

  title = "Authors";
  authors;

  constructor (authorsService: AuthorsService){
    this.authors = authorsService.getAuthors();
  }

  getTitle(){
    return this.authors.length + " " + this.title;
  }
}
