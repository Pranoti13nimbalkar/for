import { Component, signal } from '@angular/core';
import { List } from "./component/list/list";
import { Student } from "./component/student/student";
import { Post } from "./component/post/post";

@Component({
  selector: 'app-root',
  imports: [List, Student, Post],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('for');
}
