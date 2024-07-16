import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { MyPointsComponent } from './features/my-points/my-points.component';
import { HelpComponent } from './features/help/help.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { RecoverPasswordComponent } from './features/recover-password/recover-password.component';
import { MyExchangesComponent } from './features/my-exchanges/my-exchanges.component';
import { CatalogueComponent } from './features/catalogue/catalogue.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'registro',
        component: RegisterComponent
    },
    {
        path:'mis-puntos',
        component: MyPointsComponent
    },
    {
        path:'ayuda',
        component: HelpComponent
    },
    {
        path:'carrito-de-compras',
        component: ShoppingCartComponent
    },
    {
        path:'crear-contrasena',
        component: RecoverPasswordComponent
    },
    {
        path:'crear-contrasena/:id',
        component: RecoverPasswordComponent
    },
    {
        path:'mis-canjes',
        component: MyExchangesComponent
    },
    {
        path:'catalogo',
        component: CatalogueComponent
    }
];
