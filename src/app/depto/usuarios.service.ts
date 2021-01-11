import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Iusuario } from '../pojos/iusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { 
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

  private usu$ = new Subject<Iusuario[]>()

  private usuarios:Iusuario[] =[
    {
      "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light", "suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874",
        "geo": {"lat": "-37.3159","lng": "81.1496"}
      }
    },
    {
      "id": 2,"name": "Ervin Howell","username": "Antonette","email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains","suite": "Suite 879","city": "Wisokyburgh","zipcode": "90566-7771",
        "geo": {"lat": "-43.9509","lng": "-34.4618"}
      }
    }
    ]

}
