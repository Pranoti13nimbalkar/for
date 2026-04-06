import { Component } from '@angular/core';
import { IPost } from '../../models/post';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post {
PostArr: Array<IPost> = [
  { title: 'Angular Basics', body: 'Introduction to Angular framework.', author: 'Amit', isPublished: true },
  { title: 'React Guide', body: 'Learn React step by step.', author: 'Priya', isPublished: true },
  { title: 'NodeJS API', body: 'Build REST APIs using NodeJS.', author: 'Rahul', isPublished: false },
  { title: 'Java Concepts', body: 'Core Java concepts explained.', author: 'Sneha', isPublished: true },
  { title: 'Python for Beginners', body: 'Start coding in Python easily.', author: 'Vikas', isPublished: false },
  { title: 'Angular Signals', body: 'New feature in Angular 20.', author: 'Neha', isPublished: true },
  { title: 'Database Design', body: 'Learn DB design basics.', author: 'Rohan', isPublished: true },
  { title: 'TypeScript Deep Dive', body: 'Advanced TypeScript concepts.', author: 'Pooja', isPublished: false },
  { title: 'Web Performance', body: 'Improve website speed.', author: 'Karan', isPublished: true },
  { title: 'CSS Tricks', body: 'Modern CSS techniques.', author: 'Anjali', isPublished: true }
];
}
