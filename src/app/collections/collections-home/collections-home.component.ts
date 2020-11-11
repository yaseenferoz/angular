import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
data= [
  {name:"yaseen", age:32, job:"Software Engineer"},
  {name:"Feroz", age:28, job:"Software Developer"},
  {name:"Umesh", age:20, job:"Software Developer II"},
  {name:"Nagu", age:18, job:"Software Developer InFinite"},
];

headers = [
  {key:'name', label: "Name"},
  {key:'age', label: "Age"},
  {key:'job', label: "Job"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
