import { Component } from '@angular/core';

@Component({
    templateUrl: './employmentDetail.component.html'
})

export class EmploymentDetailComponent {
    public ngOnInit() {
        this.clearScripts();

        this.loadScript('custom', './app/assets/js/home.js');
        this.loadScript('employment', './app/assets/js/employment.js');
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
        this.unLoadScript('employment');
    }
}