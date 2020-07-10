import { PagesComponent } from './pages/pages.component';

import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { NoPageFoundComponent } from './shared/notfound/nopagefound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NoPageFoundComponent },
];

export const APP_ROUTE = RouterModule.forRoot(appRoutes, { useHash: true })