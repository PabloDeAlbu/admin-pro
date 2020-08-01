import { NgModule } from '@angular/core';

//modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';


import { PAGES_ROUTES } from './pages.routes';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        AccountSettingsComponent,
       ],
       exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
       ],
       imports: [
           SharedModule,
           ComponentsModule,
           PAGES_ROUTES
       ]
})

export class PagesModule { }