import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ThemeModule} from './@theme/theme.module';
import {
  NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbToastrModule,
  NbWindowModule
} from "@nebular/theme";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
