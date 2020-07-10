import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './notfound/nopagefound.component';

@NgModule({
    declarations: [ 
        BreadcrumbsComponent,
        HeaderComponent,
        NoPageFoundComponent,
        SidebarComponent
    ],
    exports: [ 
        BreadcrumbsComponent,
        HeaderComponent,
        NoPageFoundComponent,
        SidebarComponent
    ]
})

export class SharedModule {}
