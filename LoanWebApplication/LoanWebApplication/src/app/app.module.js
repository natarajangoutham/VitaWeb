"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var customerDetail_component_1 = require("./customerdetail/customerDetail.component");
var additionalDetail_component_1 = require("./additionaldetail/additionalDetail.component");
var customerIdentification_component_1 = require("./customeridentification/customerIdentification.component");
var customerReferences_component_1 = require("./customerreferences/customerReferences.component");
var employmentDetail_component_1 = require("./employmentdetail/employmentDetail.component");
var customerExpenditure_component_1 = require("./customerexpenditure/customerExpenditure.component");
var bankDetails_component_1 = require("./bankdetails/bankDetails.component");
var loanConfirmation_component_1 = require("./loanconfirmation/loanConfirmation.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'customerdetail', component: customerDetail_component_1.CustomerDetailComponent },
                    { path: 'additionaldetail', component: additionalDetail_component_1.AdditionalDetailComponent },
                    { path: 'customeridentification', component: customerIdentification_component_1.CustomerIdentificationComponent },
                    { path: 'customerreferences', component: customerReferences_component_1.CustomerReferencesComponent },
                    { path: 'employment', component: employmentDetail_component_1.EmploymentDetailComponent },
                    { path: 'customerexpenditure', component: customerExpenditure_component_1.CustomerExpenditureComponent },
                    { path: 'bankdetails', component: bankDetails_component_1.BankDetailsComponent },
                    { path: 'loanconfirmation', component: loanConfirmation_component_1.LoanConfirmationComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                customerDetail_component_1.CustomerDetailComponent,
                additionalDetail_component_1.AdditionalDetailComponent,
                customerIdentification_component_1.CustomerIdentificationComponent,
                customerReferences_component_1.CustomerReferencesComponent,
                employmentDetail_component_1.EmploymentDetailComponent,
                customerExpenditure_component_1.CustomerExpenditureComponent,
                bankDetails_component_1.BankDetailsComponent,
                loanConfirmation_component_1.LoanConfirmationComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map