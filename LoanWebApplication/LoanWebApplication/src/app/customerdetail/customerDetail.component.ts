import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './customerDetail.component.html'
})

export class CustomerDetailComponent implements OnInit {
    
    public ngOnInit() {
        this.loadScript('customerdetail', './app/assets/js/customerdetail.js');
        this.loadScript('custom', './app/assets/js/custom.js');

        this.unLoadScript('home');
        this.unLoadScript('additionaldetail');
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
}