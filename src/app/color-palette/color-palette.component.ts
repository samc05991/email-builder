import { Component, OnInit, Renderer2, ElementRef, } from '@angular/core';

@Component({
    selector: 'app-color-palette',
    templateUrl: './color-palette.component.html',
    styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {

    newColor: any = {};
    colorPalette: any = [];

    constructor() { }

    ngOnInit(): void {
        if  (JSON.parse(localStorage.getItem('colors'))) {
            this.colorPalette = JSON.parse(localStorage.getItem('colors'));
        }
    }

    addColor() {
        if (this.newColor.hex) {
            this.colorPalette.push({...this.newColor});

            localStorage.setItem('colors', JSON.stringify(this.colorPalette));
        }
    }

    removeColor(i) {
        this.colorPalette.splice(i, 1);

        localStorage.setItem('colors', JSON.stringify(this.colorPalette));
    }
}
