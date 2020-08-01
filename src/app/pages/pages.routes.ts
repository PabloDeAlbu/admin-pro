import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas', component: Graficas1Component },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: AccountSettingsComponent },
            { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
]

export const  PAGES_ROUTES = RouterModule.forChild( pagesRoutes );