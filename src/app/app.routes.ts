import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NoPageFoundComponent } from './shared/notfound/nopagefound.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'greficas1', component: Graficas1Component },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NoPageFoundComponent },
];

export const APP_ROUTE = RouterModule.forRoot(appRoutes, { useHash: true })