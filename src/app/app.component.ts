import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubIcon = faGithub;
  title = 'angular-todo-list';
  constructor(){
  }
}
