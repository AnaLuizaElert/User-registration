import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppFooterComponent,
    AppCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
