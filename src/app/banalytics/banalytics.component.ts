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

  chosenDropDown: any;

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
    this.router.navigate(["banalytics/selected/option/" + this.chosenDropDown])
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
    
    var eating_while_working_option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
            top: 'bottom',
            data: ["Your Department", "Yue Yang"]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['Eating duration', 'Eating while working duration']
      },
      series: [
        {
          name: 'Your Department',
          type: 'bar',
          data: [2,1]
        },
        {
          name: 'Yue Yang',
          type: 'bar',
          data: [4, 3]
        }
      ]
    };

    var eating_time_option = {
           tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
      xAxis: {
        type: 'category',
        data: ["0800", "0900", "1000", "1100", "1200", 1300, 1400, 1500, 1600, 1700, 1800]
      },
      yAxis: {
        max: 60,
        type: 'value'
      },
      series: [
        {
          data: [5, 7, 0, 0, 0, 7, 10, 0, 3, 0, 0],
          type: 'bar',
          showBackground: true,
          name: 'minutes'
        }
      ]
    };

    const screen_time_container = document.getElementById('screen-time');
    const email_container = document.getElementById('emails');
    const smile_container = document.getElementById('smiles');
    const meetings_container = document.getElementById('meetings');
    const eating_time_container = document.getElementById('eating-time');
    const eating_while_working_container = document.getElementById('eating-while-working');

    const screen_time_chart = echarts.init(screen_time_container);
    const smile_chart = echarts.init(smile_container);
    const email_chart = echarts.init(email_container);
    const meetings_chart = echarts.init(meetings_container);
    const eating_time_chart = echarts.init(eating_time_container);
    const eating_while_working_chart = echarts.init(eating_while_working_container);

    screen_time_chart.setOption(screen_time_option);
    email_chart.setOption(email_option);
    smile_chart.setOption(smile_option);
    meetings_chart.setOption(meetings_option);
    eating_time_chart.setOption(eating_time_option);
    eating_while_working_chart.setOption(eating_while_working_option);

  } 
  
}