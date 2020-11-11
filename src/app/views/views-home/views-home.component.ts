import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
stats=[
  {value:23,label:"Users"},
  {value:300,label:"Posts"},
  {value:500,label:"likes"},
];

items=[
  {title:"Iphone",description:"Iphone is cool",url:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {title:"Android",description:"Android is Hot",url:"https://images.unsplash.com/photo-1600087626120-062700394a01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
