import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName = '';
  allowAddServer: boolean = false;  
  servers: number[] = [];
  serverId: number = 1;
  showDetails: boolean = false;
  buttonClicks: string[] = [];

  constructor(){
    setTimeout( () => {this.allowAddServer = true} ,2000);
  }

  onResetServerName(){
    this.serverName = '';
  }

  onAddServer(){
    this.servers.push(this.serverId);
  }

  onToggleShowDetails(){
    this.showDetails = !this.showDetails;
    this.buttonClicks.push("Click number "+ (this.buttonClicks.length+1));
  }
}
