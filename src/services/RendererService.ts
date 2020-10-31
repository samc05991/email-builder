import { EventEmitter } from '@angular/core';
import { RenderedComponent } from '../models/RenderedComponent';
import { RenderedRow } from '../models/RenderedRow';

export class RendererService {
    public itemAdded$: EventEmitter<RenderedComponent>;

    public renderedRows: RenderedRow[] = [];
    public renderedComponents: RenderedComponent[] = [];

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }

    public add(item: RenderedComponent, rowId: string): void {
        this.renderedComponents.push(item);
        this.itemAdded$.emit(item);
    }

    public addRow(row: RenderedRow): void {
        row.id = `rendered-r-${this.renderedRows.length}`;

        this.renderedRows.push(row);
        // this.itemAdded$.emit(row);
    }
}