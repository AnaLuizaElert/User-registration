import { Route } from "@angular/router";
import { AppCadastroComponent } from "./app-cadastro/app-cadastro.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { HeaderComponent } from "./app-header/app-header.component";

const routes: Route[] = [
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
    }
]