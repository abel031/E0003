import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import localES from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './depto/usuarios/usuarios.component';
import { UsuariosService } from './depto/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localES,"es");

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
