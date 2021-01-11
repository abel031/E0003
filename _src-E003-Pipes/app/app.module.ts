import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import localES from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common';
import { CommonModule } from '@angular/common';
import { MyCurrencyPipe } from './my-currency.pipe';
import { MyFilterPipe } from './my-filter.pipe';
import { MySortPipe } from './my-sort.pipe';
import { OrderByPipe } from './order-by.pipe';

registerLocaleData(localES,"es");

@NgModule({
  declarations: [
    AppComponent,
    MyCurrencyPipe,
    MyFilterPipe,
    MySortPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
