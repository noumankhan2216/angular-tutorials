import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer: boolean = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers: any[] = ['testServer 1','testServer 12']
  constructor() { 
    setTimeout(() => {
      this.addNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is: '+ this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
