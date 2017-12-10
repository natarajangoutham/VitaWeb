"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        this.loadScript('./app/assets/js/customerdetail.js');
        this.loadScript('./app/assets/js/custom.js');
    };
    CustomerDetailComponent.prototype.ngAfterViewInit = function () {
    };
    CustomerDetailComponent.prototype.loadScript = function (url) {
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(node);
    };
    CustomerDetailComponent.prototype.unLoadScript = function (url) {
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].removeChild(node);
    };
    CustomerDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './customerDetail.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customerDetail.component.js.map