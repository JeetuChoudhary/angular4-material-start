import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
        MdButtonModule, 
        MdCheckboxModule, 
        MdMenuModule, 
        MdIconModule, 
        MdToolbarModule,
        MdCardModule,
        MdInputModule,
        MD_PLACEHOLDER_GLOBAL_OPTIONS
      } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import 'hammerjs';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule
  ],
  providers: [{provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
