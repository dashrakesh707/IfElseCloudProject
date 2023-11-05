import { Component } from '@angular/core';
import { ApiDataService } from 'src/app/api-data.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent {
  
  items = [
    { progress: 25 },
    { progress: 50 },
    { progress: 75 },
    
  ];

  fetchData: any = {};
  
  constructor(private apidataService: ApiDataService) {

     this.apidataService.getUserData().subscribe(data => {
       this.fetchData = data;
       console.log(data);
       
    })
    
  }

  getProgressBarStyle(progress: number): any {
    let color: string;
    if (progress < 25) {
      color = 'red';
    } else if (progress < 35) {
      color = '#b0b4bc';
    } else if (progress < 45) {
      color = '#fdc200';
    }
    else if (progress < 55) {
      color = '#5ad8b0';
    } else {
      color = '#6d87e7';
    }

    return {
      'width.%': progress,
      'background-color': color,
    };
  }
  
}
