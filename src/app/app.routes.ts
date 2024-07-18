import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { MyPointsComponent } from './features/my-points/my-points.component';
import { HelpComponent } from './features/help/help.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { RecoverPasswordComponent } from './features/recover-password/recover-password.component';
import { MyExchangesComponent } from './features/my-exchanges/my-exchanges.component';
import { CatalogueComponent } from './features/catalogue/catalogue.component';
import { loginGuard } from './core/guards/login.guard';

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
        component: MyPointsComponent,
        canActivate: [loginGuard]
    },
    {
        path:'ayuda',
        component: HelpComponent,
        canActivate: [loginGuard]
    },
    {
        path:'carrito-de-compras',
        component: ShoppingCartComponent,
        canActivate: [loginGuard]
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
        component: MyExchangesComponent,
        canActivate: [loginGuard]
    },
    {
        path:'catalogo',
        component: CatalogueComponent,
        canActivate: [loginGuard]
    }
];
