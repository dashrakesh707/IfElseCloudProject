import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-bottomgraph',
  templateUrl: './bottomgraph.component.html',
  styleUrls: ['./bottomgraph.component.scss']

})
export class BottomgraphComponent implements OnInit {
 
  ngOnInit(){
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Bar Chart',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "#4363e1",
              borderColor:"#4363e1",
              borderWidth: 1
          },
          {
            label: 'Bar charts',
            data: [3, 2, 5, 3, 19, 12],
            backgroundColor: "#bccbff",
            borderColor:"#bccbff",
            borderWidth: 1
        }],
          
      },
      
      options: {
          scales: {
             
          }
      }
  });
   new Chart("myRadar", {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'radar charts',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "#4363e1",
            borderColor:"#4363e1",
            borderWidth: 1
        },
        {
          label: 'radar chart',
          data: [3, 2, 5, 3, 19, 12],
          backgroundColor: "#bccbff",
          borderColor:"#bccbff",
          borderWidth: 1
      }],
        
    },
    
    options: {
        scales: {
           
        }
    }
});
new Chart("myLine", {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'line chart',
            data: [12, 19, 3, 5, 2, 3],
           
            borderColor:"#E65D00",
            borderWidth: 1
        }
       ],
        
    },
    
    options: {
        scales: {
        
        }
    }
});
  }

  
}
