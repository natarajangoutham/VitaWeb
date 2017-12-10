"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent() {
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        this.loadScript('customerdetail', './app/assets/js/customerdetail.js');
        this.loadScript('custom', './app/assets/js/custom.js');
        this.unLoadScript('home');
        this.unLoadScript('additionaldetail');
    };
    CustomerDetailComponent.prototype.loadScript = function (name, url) {
        var node = document.createElement('script');
        node.setAttribute('id', name);
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(node);
    };
    CustomerDetailComponent.prototype.unLoadScript = function (name) {
        var scriptTag = document.getElementById(name);
        if (scriptTag != undefined) {
            scriptTag.remove();
        }
    };
    CustomerDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './customerDetail.component.html'
        })
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customerDetail.component.js.map