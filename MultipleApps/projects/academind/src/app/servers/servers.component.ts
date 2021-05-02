import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false ;
  serverCreationStatus = 'No server was created!';
  serverName = "";
  userName = "";
  serverCreated = false;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
   }

  

  ngOnInit(): void {
}
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
   this.serverName= (<HTMLInputElement>event.target).value;

  }


  clearInput(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
