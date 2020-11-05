import { EventEmitter } from '@angular/core';
import { RenderedComponent } from '../models/RenderedComponent';
import { RenderedRow } from '../models/RenderedRow';

export class RendererService {
    public itemAdded$: EventEmitter<RenderedComponent>;

    public renderedRows: RenderedRow[] = [];
    public renderedComponents: RenderedComponent[] = [];

    public selectedRow: RenderedRow;
    public selectedComponent: RenderedComponent;

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }

    public add(item: RenderedComponent): void {
        let newItem = Object.assign({}, item);
        newItem.id = `${this.selectedRow.id}-c-${this.renderedComponents.length}`;

        this.renderedComponents.push(newItem);
        this.selectedRow.components.push(newItem);

        this.itemAdded$.emit(newItem);
    }

    public addRow(row: RenderedRow): void {
        row.id = `rendered-r-${this.renderedRows.length}`;

        this.renderedRows.push(row);

        this.selectedRow = row;
    }

    public selectRow(row: RenderedRow) {
        this.selectedRow = row;
    }
    public selectComponent(component: RenderedComponent) {
        this.selectedComponent = component;
        console.log(component);
    }
    // Styles
    public updateStyleComponent(style: string, value: string, itemId: string) {
        for(let i = 0; i < this.renderedComponents.length; i++) {
            if (this.renderedComponents[i].id === itemId) {
                this.renderedComponents[i].styles[style] = value;
            }
        }
    }
}