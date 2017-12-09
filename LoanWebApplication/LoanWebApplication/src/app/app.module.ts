import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerDetailComponent } from './customerdetail/customerDetail.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'customerdetail', component: CustomerDetailComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CustomerDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
