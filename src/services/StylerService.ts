import { EventEmitter } from '@angular/core';
import { RenderedComponent } from '../models/RenderedComponent';

export class StylerService {
    element: any;

    constructor() {

    }

    selectComponent(index, rowIndex) {
        this.element = document.getElementById(`rendered-r-${rowIndex}c-${index}`);
    }

    selectRow(index) {
        this.element = document.getElementById(`rendered-r-${index}`);
    }

    textAlignLeft() {
        this.element.style["text-align"] = 'left';
    }
    textAlignCenter() {
        this.element.style["text-align"] = 'center';
    }
    textAlignRight() {
        this.element.style["text-align"] = 'right';
    }
}