import { Component } from '@angular/core';
import {DatabaseService} from './services/database.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items:any;

  constructor(private db: DatabaseService){
    this.items=db.get();
  }
}
