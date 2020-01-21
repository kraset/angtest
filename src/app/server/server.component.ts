import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server', //använder element tag: <app-server></app-server>
  //selector: '[app-server]', // använder attribut: <div app-server></div>
  //selector: '.app-server', // använder klass: <div class="app-server"></div>
  templateUrl: './server.component.html',
  //styleUrls: ['./server.component.css']
  styles: [`
    .online{ background-color: yellow; }
    `]
})
export class ServerComponent implements OnInit {

  static numServers: number = 0;
  id: number = 0;
  status: string = "offline";

  constructor() {
    this.id = ++ServerComponent.numServers;
    this.status = Math.random() > 0.5 ? "offline" : "online"; 
  }

  getStatus(){
    return this.status;
  }

  getColor(){
    return this.status === 'offline' ? 'red' : 'green';
  }

  ngOnInit() {
  }

}
