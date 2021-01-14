import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import localES from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './comp/about/about.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { DeptoComponent } from './comp/depto/depto.component';
import { EmpleadosComponent } from './comp/depto/empleados/empleados.component';

registerLocaleData(localES,"es");

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    DeptoComponent,
    EmpleadosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'home', component:HomeComponent},
      {path: 'about', component:AboutComponent},
      {path: 'depto', component:DeptoComponent},
      {path: 'empleados/:id/:name', component:EmpleadosComponent},
      {path: '**', component:PageNotFoundComponent}
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
