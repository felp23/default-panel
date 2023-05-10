import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [    
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        CheckboxModule,
        CardModule,
        InputTextModule,
        ButtonModule
    ]
})
export class AuthModule { }
