import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { AppConsultaComponent } from './app-consulta/app-consulta.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ItemNomeComponent } from './app-consulta/app-item-nome.component';
import { ItemEstadoComponent } from './app-consulta/app-item-estado.component';
import { AppButtonComponent } from './app-button/app-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppFooterComponent,
    AppCadastroComponent,
    AppConsultaComponent,
    AppHomeComponent,
    ItemNomeComponent,
    ItemEstadoComponent,
    AppButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
