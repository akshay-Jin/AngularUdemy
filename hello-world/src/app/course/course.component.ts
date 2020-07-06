import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  text=`
    asd a s as as dasd asvvvvvvvvvvvvvvvvadasdad asd as  ad a asdas asd a s as as dasd asadasdad
     asd as  ad a asdasasd a s as as dasd asadasdad asd as  ad a asdasasd a s as as dasd asadasdad asd 
     as  ad a asdasasd a s as as dasd bbbasadasdad asd as  ad a asdasasd a s as as dasd asadasdad asd as  ad a asdas
  `
  constructor() { }

  ngOnInit(): void {
  }

}
