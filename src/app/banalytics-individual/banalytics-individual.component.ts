import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-banalytics-individual',
  templateUrl: './banalytics-individual.component.html',
  styleUrls: ['./banalytics-individual.component.css']
})
export class BanalyticsIndividualComponent implements OnInit {
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
      stat_type: "Screen Time",
      status: "Good",
      rating: "20%",
      number: "40 Hours",
      team: "40 Hours", 
      dept: "42 hours"
    },
    {
      stat_type: "Number of Meetings",
      status: "Poor",
      rating: "20%",
      number: "20",
      team: "24", 
      dept: "32"
    },
    {
      stat_type: "Time Spent In Meetings",
      status: "Average",
      rating: "45%",
      number: "43 Hours",
      team: "30 Hours", 
      dept: "32 hours"
    },
    {
      stat_type: "Number of Emails sent",
      status: "poor",
      rating: "30%",
      number: "70",
      team: "71", 
      dept: "78"
    },
    {
      stat_type: "Number of Emails Recieved",
      status: "Average",
      rating: "45%",
      number: "80%",
      team: "78%", 
      dept: "85%"
    },
    {
      stat_type: "Stress Index",
      status: "Poor",
      rating: "20%",
      number: "20%",
      team: "24%", 
      dept: "30%"
    },
    
  ]

  ngOnInit(): void {}

  onClick(name) {
    this.router.navigate(["banalytics/individual/" + name])
  }

  onChange() {
    
  }
  
  
  ngAfterViewInit(): void {
    const ec = echarts as any; 
    
    var eating_while_working_option = {
      color: [
        '#9290FE',
        '#6BE2BE',
        '#d9534f',
        '#f0ad4e'
      ],
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
      color: [
        '#9290FE',
        '#6BE2BE',
        '#d9534f',
        '#f0ad4e'
      ],
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

 
    const eating_time_container = document.getElementById('eating-time');
    const eating_while_working_container = document.getElementById('eating-while-working');

    const eating_time_chart = echarts.init(eating_time_container);
    const eating_while_working_chart = echarts.init(eating_while_working_container);

    eating_time_chart.setOption(eating_time_option);
    eating_while_working_chart.setOption(eating_while_working_option);

  } 

}
