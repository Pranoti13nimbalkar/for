import { Component } from '@angular/core';
import { Istd } from '../../models/std';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [NgClass],
  templateUrl: './student.html',
  styleUrl: './student.scss',
})
export class Student {

 students: Array<Istd> = [
  { sid: 1, sname: 'Amit Sharma', course: 'Angular', age: 22, status: 'active', canEnroll: true },
  { sid: 2, sname: 'Priya Patil', course: 'React', age: 21, status: 'completed', canEnroll: false },
  { sid: 3, sname: 'Rahul Verma', course: 'NodeJS', age: 23, status: 'active', canEnroll: true },
  { sid: 4, sname: 'Sneha Kulkarni', course: 'Java', age: 24, status: 'inactive', canEnroll: false },
  { sid: 5, sname: 'Vikas Singh', course: 'Python', age: 22, status: 'completed', canEnroll: false },
  { sid: 6, sname: 'Neha Joshi', course: 'Angular', age: 20, status: 'active', canEnroll: true },
  { sid: 7, sname: 'Rohan Deshmukh', course: 'React', age: 23, status: 'inactive', canEnroll: false },
  { sid: 8, sname: 'Pooja Mehta', course: 'NodeJS', age: 21, status: 'active', canEnroll: true },
  { sid: 9, sname: 'Karan Shah', course: 'Java', age: 25, status: 'completed', canEnroll: false },
  { sid: 10, sname: 'Anjali Gupta', course: 'Python', age: 22, status: 'active', canEnroll: true }
];
}
