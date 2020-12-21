import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    mobile: boolean;

    constructor() { }

    ngOnInit() {
        if (window.screen.width <= 768) {
            this.mobile = true;
        }
    }
}
