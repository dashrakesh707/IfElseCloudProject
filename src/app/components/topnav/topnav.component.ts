import { Component } from '@angular/core';
import { faSearch,faMessage,faBell,faUser,faCaretDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
   faSearch=faSearch;
   faMessage=faMessage;
   faBell=faBell;
   faUser=faUser;
   faCaretDown = faCaretDown;
}
