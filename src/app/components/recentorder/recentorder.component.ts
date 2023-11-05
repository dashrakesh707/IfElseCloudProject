import { Component, ViewChild } from '@angular/core';
import { ApiDataService } from 'src/app/api-data.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-recentorder',
  templateUrl: './recentorder.component.html',
  styleUrls: ['./recentorder.component.scss']
})
export class RecentorderComponent {

  faXmark = faXmark;
   
  fetchData: any = {};

  constructor(private apidataService: ApiDataService) {

     this.apidataService.getUserData().subscribe(data => {
       this.fetchData = data;
       console.log(data);
       
    })
    
  }
//Status button 
  getButtonStyle(status: string): any {
    switch (status) {
      case 'Pending':
        return { 'background-color': '#7683a3' };
      case 'Paid':
        return { 'background-color': '#31ce73'};
      case 'Failed':
        return { 'background-color': '#eb576b' };
      default:
        return {};
    }
  }
  //Modal poup
  @ViewChild('modal', { static: false })
  modal: ModalComponent = new ModalComponent;

  openModal() {
    this.modal.open();
  }

}
