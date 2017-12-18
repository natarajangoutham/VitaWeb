import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerDetailComponent } from './customerdetail/customerDetail.component';
import { AdditionalDetailComponent } from './additionaldetail/additionalDetail.component';
import { CustomerIdentificationComponent } from './customeridentification/customerIdentification.component';
import { CustomerReferencesComponent } from './customerreferences/customerReferences.component';
import { EmploymentDetailComponent } from './employmentdetail/employmentDetail.component';
import { CustomerExpenditureComponent } from './customerexpenditure/customerExpenditure.component';
import { BankDetailsComponent } from './bankdetails/bankDetails.component';
import { LoanConfirmationComponent } from './loanconfirmation/loanConfirmation.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'customerdetail', component: CustomerDetailComponent },
            { path: 'additionaldetail', component: AdditionalDetailComponent },
            { path: 'customeridentification', component: CustomerIdentificationComponent },
            { path: 'customerreferences', component: CustomerReferencesComponent },
            { path: 'employment', component: EmploymentDetailComponent },
            { path: 'customerexpenditure', component: CustomerExpenditureComponent },
            { path: 'bankdetails', component: BankDetailsComponent },
            { path: 'loanconfirmation', component: LoanConfirmationComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CustomerDetailComponent,
        AdditionalDetailComponent,
        CustomerIdentificationComponent,
        CustomerReferencesComponent,
        EmploymentDetailComponent,
        CustomerExpenditureComponent,
        BankDetailsComponent,
        LoanConfirmationComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
