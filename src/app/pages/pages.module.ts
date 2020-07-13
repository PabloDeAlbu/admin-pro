import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//modulos
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent
       ],
       exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
       ],
       imports: [
           SharedModule,
           FormsModule,
           PAGES_ROUTES
       ]
})

export class PagesModule { }