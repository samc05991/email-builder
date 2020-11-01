import { EventEmitter } from '@angular/core';
import { RenderedComponent } from '../models/RenderedComponent';
import { RenderedRow } from '../models/RenderedRow';

export class RendererService {
    public itemAdded$: EventEmitter<RenderedComponent>;

    public renderedRows: RenderedRow[] = [];
    public renderedComponents: RenderedComponent[] = [];

    public selectedRow: RenderedRow;

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }

    public add(item: RenderedComponent): void {
        let newItem = Object.assign({}, item);
        newItem.id = `rendered-r-${this.selectedRow.id}-c-${this.renderedComponents.length}`;


        this.renderedComponents.push(newItem);
        this.selectedRow.components.push(newItem);

        this.itemAdded$.emit(newItem);
    }

    public addRow(row: RenderedRow): void {
        row.id = `rendered-r-${this.renderedRows.length}`;

        this.renderedRows.push(row);
        // this.itemAdded$.emit(row);
    }

    public selectRow(row: RenderedRow) {
        this.selectedRow = row;
    }
}