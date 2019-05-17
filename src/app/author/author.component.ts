import { Component } from '@angular/core';
import { AuthorService } from 'app/author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html'
})

export class AuthorComponent {

  title = "Authors";
  authors;

  constructor (service: AuthorService){

    this.authors = service.getAuthors();
  }

  getTitle(){
    return this.authors.length + " " + this.title;
  }
}
