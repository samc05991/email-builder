import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-section-component',
    templateUrl: './section-component.component.html',
    styleUrls: ['./section-component.component.scss']
})
export class SectionComponentComponent implements OnInit {
    text: string = 'New Section';
    styles: any = {
       "padding": "20px",
       "background-color": "black",
       "color": "white"
    };

    constructor() { }

    ngOnInit(): void {
    }

}
