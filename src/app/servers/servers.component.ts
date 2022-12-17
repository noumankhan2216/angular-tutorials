import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // use as property
  // selector: '.app-servers', // use as class
  selector: 'app-servers',
  // templateUrl: './servers.component.html', // using external template file
  // template for internal html
  template: `   
    <app-server></app-server>
    <app-server></app-server>
  `,
  // styleUrls: ['./servers.component.css'] // using external css file it could be mulitiple
  // internal styling 
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `] 
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
