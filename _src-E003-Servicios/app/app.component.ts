import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './depto/usuarios.service';
import { Iusuario } from './pojos/iusuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _usuarios:UsuariosService){}

  ngOnInit(): void {
    this._usuarios.getUsuariosJSON().subscribe(
      data => this.usuarios = data
    );
  }

  public usuarios = []
}