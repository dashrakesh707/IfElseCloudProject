import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainsectionComponent } from './components/mainsection/mainsection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopdatacardComponent } from './components/topdatacard/topdatacard.component';
import { RecentorderComponent } from './components/recentorder/recentorder.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { BottomgraphComponent } from './components/bottomgraph/bottomgraph.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    MainsectionComponent,
    TopdatacardComponent,
    RecentorderComponent,
    NewuserComponent,
    BottomgraphComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
