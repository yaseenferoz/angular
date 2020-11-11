import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
@Input() className='';
@Input() data=[];
@Input() headers=[];
  constructor() { }

  ngOnInit(): void {
  }

}
