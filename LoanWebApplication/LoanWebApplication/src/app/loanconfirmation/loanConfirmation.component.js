"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoanConfirmationComponent = /** @class */ (function () {
    function LoanConfirmationComponent() {
    }
    LoanConfirmationComponent.prototype.ngOnInit = function () {
        this.clearScripts();
        this.loadScript('custom', './app/assets/js/custom.js');
        this.loadScript('loanconfirmation', './app/assets/js/loanconfirmation.js');
    };
    LoanConfirmationComponent.prototype.loadScript = function (name, url) {
        var node = document.createElement('script');
        node.setAttribute('id', name);
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(node);
    };
    LoanConfirmationComponent.prototype.unLoadScript = function (name) {
        var scriptTag = document.getElementById(name);
        if (scriptTag != undefined) {
            scriptTag.remove();
        }
    };
    LoanConfirmationComponent.prototype.clearScripts = function () {
        this.unLoadScript('home');
        this.unLoadScript('custom');
        this.unLoadScript('customerdetail');
        this.unLoadScript('additionaldetail');
        this.unLoadScript('customeridentification');
        this.unLoadScript('customerreferences');
        this.unLoadScript('customerexpenditure');
        this.unLoadScript('bankdetails');
        this.unLoadScript('loanconfirmation');
    };
    LoanConfirmationComponent = __decorate([
        core_1.Component({
            templateUrl: './loanConfirmation.component.html'
        })
    ], LoanConfirmationComponent);
    return LoanConfirmationComponent;
}());
exports.LoanConfirmationComponent = LoanConfirmationComponent;
//# sourceMappingURL=loanConfirmation.component.js.map