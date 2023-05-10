import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        PagesRoutingModule,
        SharedModule,
    ]
})
export class PagesModule { }
