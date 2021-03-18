import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion Tareas Angular';

  employees = [
    {'name':'Fazt',position:'manager'},
    {'name':'Mario',position:'Programador'},
    {'name':'Pedro',position:'practicante'},
    {'name':'Alberto',position:'Diseñador'}
  ];

model:any = {}

addEmployee():void{

}

deleteEmployee():void{
  
}

editEmployee():void{
  
}

updateEmployee():void{
  
}

}
