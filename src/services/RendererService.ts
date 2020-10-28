import { EventEmitter } from '@angular/core';
import { RenderedComponent } from '../models/RenderedComponent';

export class RendererService {
    public itemAdded$: EventEmitter<RenderedComponent>;
    private renderedComponents: RenderedComponent[] = [];

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }

    public add(item: RenderedComponent): void {
        this.renderedComponents.push(item);
        this.itemAdded$.emit(item);
    }
}