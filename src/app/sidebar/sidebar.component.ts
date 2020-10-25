import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    menu: any = {
        colorPalette: false,
        elements: false,
        styles: false,
    }

    constructor() { }

    ngOnInit(): void {
    }

    toggleMenuItem(item) {
        this.menu[item] = !this.menu[item];
    }

}
