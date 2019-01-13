import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DatabaseService } from './services/database.service';
import { FormularioComponent } from './formulario/formulario.component';

const approutes: Routes = [
  { path: 'form', component: FormularioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports:[
    RouterModule 
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
