import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private _usuarios:UsuariosService) { }

  ngOnInit(): void {
    this.usuarios = this._usuarios.getUsuarios();
  }

  public usuarios = []

}
