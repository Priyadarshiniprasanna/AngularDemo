import { Component, OnInit } from '@angular/core';
import { ENGINEERS } from '../mock-engineers';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent implements OnInit {
  engineers = ENGINEERS;

  constructor() { }

  ngOnInit(): void {
  }
}
