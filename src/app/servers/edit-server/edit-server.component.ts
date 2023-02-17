import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string; } | any;
  serverName: any;
  serverStatus: any;

  constructor(private serversService: ServersService, private rotue: ActivatedRoute) { 
  }

  ngOnInit() {
    // the console section of the code will give just the snapshot of the url
    // it will not be reactive 0
    console.log(this.rotue.snapshot.queryParams);
    console.log(this.rotue.snapshot.fragment);
    // to make it reactive we would like to make it an observale 
    // so every time there is a change component will listen to it.
    this.rotue.queryParams.subscribe();
    this.rotue.fragment.subscribe();
    
    this.server = this.serversService.getServer(1);
    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
