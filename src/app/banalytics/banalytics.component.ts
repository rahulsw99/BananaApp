import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-banalytics',
  templateUrl: './banalytics.component.html',
  styleUrls: ['./banalytics.component.css']
})
export class BanalyticsComponent implements OnInit {
  options: any;
  constructor(private router: Router, protected route: ActivatedRoute) {}

  rpage = 'Tracker' + Math.round(Math.random() * 100000);
  pageId = 1;
  itemsPerPage = 30;
  totalItems = 30;

  dropDownOptions: any[] = [
    "A", "B", "C"
  ]

  users: any[] = [
    {
      name:"Yue Yang",
      status:"Good",
      rating: 80,
      screenTime: 50,
      email: 70,
      meeting: 20,
      smiles: 30
    },
    {
      name:"Jason Chen",
      status:"Average",
      rating: 55,
      screenTime: 60,
      email: 80,
      meeting: 30,
      smiles: 25
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
      rating: 75,
      screenTime: 45,
      email: 65.5,
      meeting: 28,
      smiles: 42
    },
    {
      name:"Kefen Chen",
      status:"Average",
      rating: 60,
      screenTime: 55,
      email: 48,
      meeting: 20,
      smiles: 28
    }
  ]

  ngOnInit(): void {}

  onClick(name) {
    this.router.navigate(["banalytics/individual/" + name])
  }

  onChange() {
    
  }
  
  ngAfterViewInit(): void {
    const ec = echarts as any;


    
    
    var screen_time_option = {
      color: [
        '#428bca',
        '#5cb85c',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      title: {
        text: 'Average Screen Time'
      },
      legend: {
    top: 'bottom',

        data: ["Your Department", "Department A"]
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
          name: "Your Department",
          data: [550, 630, 624, 618, 635, 647, 560],
          type: 'line'
        },
        {
          name: "Department A",
          data: [530, 620, 654, 518, 635, 627, 660],
          type: 'line'
        }
      ]
    };
    
   
    
    var email_option = {
      color: [
        '#428bca',
        '#5cb85c',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      title: {
        text: 'Average Email'
      },
      legend: {
    top: 'bottom',

        data: ["Your Department", "Department A"]
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
          name: "Your Department",
          data: [411, 427, 466, 346, 392, 368, 462],
          type: 'line'
        },
        {
          name: "Department A",
          data: [497, 332, 320, 461, 430, 436, 414],
          type: 'line'
        }
      ]
    };
    
    console.log(Array.from({length: 7}, () => (Math.floor(Math.random() * 70)) + 10))
    var smile_option = {
      color: [
        '#428bca',
        '#5cb85c',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      title: {
        text: 'Average Smiles'
      },
      legend: {
    top: 'bottom',

        data: ["Your Department", "Department A"]
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
          name: 'Your Department',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [116, 157, 172, 231, 131, 284, 107]
        },
        {
          name: 'Department A',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        }
      ]
    };
    
    var meetings_option = {
      color: [
        '#428bca',
        '#5cb85c',
        '#d9534f',
        '#f0ad4e'
      ],
      tooltip: {
        trigger: 'axis'
      },
      title: {
        text: 'Average Meetings'
      },
      legend: {
    top: 'bottom',

        data: ["Your Department", "Department A"]
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
          name: "Your Department",
          data: [31, 54, 61, 12, 72, 20, 26],
          type: 'line'
        },
        {
          name: "Department A",
          data: [45, 19, 72, 74, 57, 74, 41],
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