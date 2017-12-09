import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'ln-app',
    template: `<div>
                <router-outlet></router-outlet>
               </div>`
})
export class AppComponent  { name = 'Angular'; }
