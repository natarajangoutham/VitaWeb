import { Component } from '@angular/core';

@Component({
    templateUrl: './customerExpenditure.component.html'
})

export class CustomerExpenditureComponent {
    public ngOnInit() {
        this.clearScripts();

        this.loadScript('custom', './app/assets/js/custom.js');
        this.loadScript('customerexpenditure', './app/assets/js/customerexpenditure.js');
    }

    public loadScript(name: string, url: string) {
        let node = document.createElement('script');
        node.setAttribute('id', name);
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(node);
    }

    public unLoadScript(name: string) {
        var scriptTag = document.getElementById(name);
        if (scriptTag != undefined) {
            scriptTag.remove();
        }
    }

    public clearScripts() {
        this.unLoadScript('home');
        this.unLoadScript('custom');
        this.unLoadScript('customerdetail');
        this.unLoadScript('additionaldetail');
        this.unLoadScript('customeridentification');
        this.unLoadScript('customerreferences');
        this.unLoadScript('customerexpenditure');
        this.unLoadScript('bankdetails');
        this.unLoadScript('loanconfirmation');
    }
}