import { EventEmitter } from '@angular/core';
import { RenderedComponent } from '../models/RenderedComponent';

export class StylerService {
    element: any;
    public itemAdded$: EventEmitter<any>;
    constructor() {
        this.itemAdded$ = new EventEmitter();
        
    }

    selectElement(index, component) {
        this.element = document.getElementById(`rendered-${index}`);
        this.itemAdded$.emit(component);
        
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