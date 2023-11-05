import { Component } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { ApiDataService } from 'src/app/api-data.service';

@Component({
  selector: 'app-topdatacard',
  templateUrl: './topdatacard.component.html',
  styleUrls: ['./topdatacard.component.scss']
})
export class TopdatacardComponent {
  faMusic=faMusic;

  fetchData: any = {};

  constructor(private apidataService: ApiDataService) {

    this.apidataService.getUserData().subscribe(data => {
      this.fetchData = data;
      console.log(data);
      
   })
   
  }
}
