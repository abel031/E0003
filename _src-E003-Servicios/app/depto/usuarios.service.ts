import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Iusuario } from '../pojos/iusuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { 
    setTimeout( 
      () =>{ 
        this.usu$.next(this.usuarios) 
      }
      ,1000
    );
  }

  getUsuarios():Observable<Iusuario[]>{
    return this.usu$.asObservable();
  }

  add(usuario:Iusuario){
    this.usuarios.push(usuario)
    this.usu$.next(this.usuarios)
  }

  getUsuariosJSON():Observable<Iusuario[]>{
    return this.http.get<Iusuario[]>(this._url)
  }

  private usu$ = new Subject<Iusuario[]>()
  private _url:string="/assets/datos/usuarios.json";


  private usuarios:Iusuario[] =[
    {
      "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz"
    },
    {
      "id": 2,"name": "Ervin Howell","username": "Antonette","email": "Shanna@melissa.tv"
    }
    ]

}
