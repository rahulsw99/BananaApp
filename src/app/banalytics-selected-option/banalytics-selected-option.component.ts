import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-banalytics-selected-option',
  templateUrl: './banalytics-selected-option.component.html',
  styleUrls: ['./banalytics-selected-option.component.css']
})
export class BanalyticsSelectedOptionComponent implements OnInit {

  constructor(protected route: ActivatedRoute) { }

  chosenDropDown: any;

  ngOnInit(): void {

  }

}
