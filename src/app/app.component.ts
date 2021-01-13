import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './depto/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _usuarios:UsuariosService){}

  ngOnInit(): void {
    this.usuarios = this._usuarios.getUsuarios();
  }

  public usuarios = []
}