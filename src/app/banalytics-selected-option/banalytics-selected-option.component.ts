import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { parse } from 'path';
import * as echarts from 'echarts';

@Component({
  selector: 'app-banalytics-selected-option',
  templateUrl: './banalytics-selected-option.component.html',
  styleUrls: ['./banalytics-selected-option.component.css']
})
export class BanalyticsSelectedOptionComponent implements OnInit {

  chosenDropDown: any;
  
  options: any;
  constructor(private router: Router, protected route: ActivatedRoute) {}

  rpage = 'Tracker' + Math.round(Math.random() * 100000);
  pageId = 1;
  itemsPerPage = 30;
  totalItems = 30;

  dropDownOptions: any[] = [
    "10/11/21 - 16/11/21", "2/11/21 - 9/11/21"
  ]
  selected = "select"

  users: any[] = [
    {
      name:"Yue Yang",
      status:"Good",
      rating: 78,
      screenTime: 50,
      email: 76,
      meeting: 23,
      smiles: 31
    },
    {
      name:"Jason Chen",
      status:"Average",
      rating: 53,
      screenTime: 50,
      email: 85,
      meeting: 32,
      smiles: 15
    },
    {
      name:"Isabelle Ong",
      status:"Poor",
      rating: 30,
      screenTime: 80.5,
      email: 90,
      meeting: 30,
      smiles: 15
    },
    {
      name:"Rahul Wadhwa",
      status:"Good",
      rating: 72,
      screenTime: 55,
      email: 65.9,
      meeting: 26,
      smiles: 41
    },
    {
      name:"Kefen Chen",
      status:"Average",
      rating: 64,
      screenTime: 65,
      email: 58,
      meeting: 23,
      smiles: 22
    }
  ]

  ngOnInit(): void {}

  onClick(name) {
    this.router.navigate(["banalytics/individual/" + name])
  }

  onChange() {
    this.router.navigate(["banalytics"])
  }
  
  
  ngAfterViewInit(): void {
    const ec = echarts as any; 
    var screen_time_option = {
      color: [
        '#9290FE',
        '#6BE2BE',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
    top: 'bottom',

        data: ["Your Team", "Department Average"]
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: "Your Team",
          data: [530, 620, 524, 638, 634, 637, 570],
          type: 'line'
        },
        {
          name: "Department Average",
          data: [530, 624, 654, 618, 634, 527, 640],
          type: 'line'
        }
      ]
    };
    
    var email_option = {
      color: [
        '#9290FE',
        '#6BE2BE',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
    top: 'bottom',

        data: ["Your Team", "Department Average"]
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: "Your Team",
          data: [412, 527, 436, 336, 392, 468, 462],
          type: 'line'
        },
        {
          name: "Department Average",
          data: [397, 432, 320, 461, 432, 336, 454],
          type: 'line'
        }
      ]
    };
    
    var smile_option = {
      color: [
        '#9290FE',
        '#6BE2BE',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
    top: 'bottom',

        data: ["Your Team", "Department Average"]
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Your Team',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [49, 57, 42, 31, 61, 34, 67]
        },
        {
          name: 'Department Average',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [220, 35, 51, 44, 10, 30, 13]
        }
      ]
    };
    
    var meetings_option = {
      color: [
        '#9290FE',
        '#6BE2BE',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
    top: 'bottom',

        data: ["Your Team", "Department Average"]
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: "Your Team",
          data: [31, 44, 63, 42, 73, 20, 25],
          type: 'line'
        },
        {
          name: "Department Average",
          data: [35, 25, 42, 64, 47, 24, 21],
          type: 'line'
        }
      ]
    };
    
    const screen_time_container = document.getElementById('screen-time');
    const email_container = document.getElementById('emails');
    const smile_container = document.getElementById('smiles');
    const meetings_container = document.getElementById('meetings');

    const screen_time_chart = echarts.init(screen_time_container);
    const smile_chart = echarts.init(smile_container);
    const email_chart = echarts.init(email_container);
    const meetings_chart = echarts.init(meetings_container);

    screen_time_chart.setOption(screen_time_option);
    email_chart.setOption(email_option);
    smile_chart.setOption(smile_option);
    meetings_chart.setOption(meetings_option);

  } 

}
