import { Component } from "@angular/core";

@Component({    // this is a decorator to tell file that this is component file
    // add metaData to component
    selector: 'app-server', // it should be unique
    templateUrl: './server.component.html' // template file and add it's relative path
}) 
// it is necessary to expoet it becasue it will be used by appComponent (rootComponent)
export class ServerComponent {

}