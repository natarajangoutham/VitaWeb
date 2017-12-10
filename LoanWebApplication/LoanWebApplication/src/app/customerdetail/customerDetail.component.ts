import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './customerDetail.component.html'
})

export class CustomerDetailComponent implements OnInit, AfterViewInit {
    private fragment: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    public ngOnInit() {
        this.loadScript('./app/assets/js/customerdetail.js');
        this.loadScript('./app/assets/js/custom.js');
    }
    ngAfterViewInit(): void {
    }

    public loadScript(url: string) {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(node);
    }

    public unLoadScript(url: string) {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].removeChild(node);
    }
}