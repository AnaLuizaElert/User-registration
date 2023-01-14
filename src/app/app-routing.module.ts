import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { AppConsultaComponent } from "./app-consulta/app-consulta.component";
import { AppCadastroComponent } from "./app-cadastro/app-cadastro.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { HeaderComponent } from "./app-header/app-header.component";
import { AppHomeComponent } from "./app-home/app-home.component";
import { ItemEstadoComponent } from "./app-consulta/app-item-estado.component";
import { ItemNomeComponent } from "./app-consulta/app-item-nome.component";
import { AppButtonComponent } from "./app-button/app-button.component";

const routes: Routes = [
    {
        path: 'app-button',
        component: AppButtonComponent
    },
    {
        path: 'app-item-estado',
        component: ItemEstadoComponent
    },
    {
        path: 'app-item-nome',
        component: ItemNomeComponent
    },
    {
        path: 'app-home',
        component: AppHomeComponent
    },
    {
        path: 'app-header',
        component: HeaderComponent
    },
    {
        path: 'app-footer',
        component: AppFooterComponent
    },
    {
        path: 'app-cadastro',
        component: AppCadastroComponent
    },
    {
        path: 'app-consulta',
        component: AppConsultaComponent
    },
    {
        path: '', 
        component: AppCadastroComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}