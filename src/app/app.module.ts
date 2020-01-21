import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //for ngModel double binding

//Beskriv för typescript var man hittar dessa komponenter...
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AlertsComponent } from './alerts/alerts.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';

@NgModule({
  declarations: [ //komponenter som används av denna modul...
    AppComponent,
    ServerComponent,
    AlertsComponent,
    WarningAlertComponent,
    SuccessAlertComponent, 
  ],
  imports: [  //inbyggda moduler som finns i Angular
    BrowserModule,  //grundläggande... måste finnas...
    FormsModule, //for ngModel double binding
  ],
  providers: [],
  bootstrap: [AppComponent]  //---> modulen startas upp med denna komponent
})
export class AppModule { }
