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
  constructor() { 
    setTimeout(() => {
      this.addNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  onServerCreation(){
    this.serverCreationStatus = 'Server was created';
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
