import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  items: any;

  constructor(private db: DatabaseService){
    this.items=db.getCategory();
  }

  ngOnInit() {
  }

}
