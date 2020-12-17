import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Movie } from './movie';

@Component({
  selector: 'app-tabla',
  template: `
  <table>
    <tr id="titulos">
      <th>ID</th>
      <th>Ttulo</th>
      <th>Director</th>
      <th>Actores</th>
      <th>Fecha</th>
      <th>Edit</th>
    </tr>
    <tr *ngFor="let movie of movies index as i;" id="filas">
      <td>{{movie.code}}</td>
      <td>{{movie.title}}</td>
      <td>{{movie.director}}</td>
      <td>{{movie.cast}}</td>
      <td>{{movie.releaseDate | date:"dd/MM/yyyy"}}</td>
      <td>
        <button (click)="Edit(i)">Editar</button>
      </td>
    </tr>
  </table>
  `,
  styles: [`
    tr {
      background-color: rgb(178, 148, 248);
    }
    
    td {
      background-color: #ffa;
    }    
    `]
})
export class TablaComponent implements OnInit {

  @Input() Calificaciones;
  @Input() movies:Movie[]
  @Output() Visualiza = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  Edit(i){
    this.Visualiza.emit(i);
  }


}
