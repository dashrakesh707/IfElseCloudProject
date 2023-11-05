import { Component } from '@angular/core';
import { faBars,faHouse,faDownload,faDashboard,faCheck,faSearchPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  faBars = faBars;
  faHouse= faHouse;
  faDownload=faDownload;
  faDashboard=faDashboard;
  faCheck=faCheck;
  faSearchPlus=faSearchPlus;

}
