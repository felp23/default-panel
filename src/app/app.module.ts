import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StyleClassModule,
        AppRoutingModule,
        FormsModule,
        PagesModule,
        HttpClientModule,
        AuthModule
    ],
    providers: [
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
