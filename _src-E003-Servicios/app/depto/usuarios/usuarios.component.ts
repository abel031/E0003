import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Iusuario } from '../../pojos/iusuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private _usuarios:UsuariosService) { }

  ngOnInit(): void {
    this._usuarios.getUsuariosJSON().subscribe(
      data => this.usuarios = data
    );
  }

  add(){
    this._usuarios.add({"id":3,"name":"Pepe","username":"Pepe","email":"Pepe@gmail.com"});
  }

  public usuarios = []

}
