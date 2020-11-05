import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { RenderedComponent } from 'src/models/RenderedComponent';
import { RenderedRow } from 'src/models/RenderedRow';
import { RendererService } from 'src/services/RendererService';
import { StylerService } from 'src/services/StylerService';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RendererComponent implements OnInit {

    rows = [];

    selectedRow: RenderedRow;
    selectedComponent:RenderedComponent;

    constructor(private _rendererService: RendererService, private _stylerService: StylerService) {
        // _rendererService.itemAdded$.subscribe((item: RenderedComponent) => this.rows.push(item));
        this.rows = _rendererService.renderedRows;
        this.selectedRow = _rendererService.selectedRow;

    }

    ngOnInit(): void {

    }

    selectRow(index: number, row: RenderedRow) {
        this._stylerService.selectRow(index);
        this._rendererService.selectRow(row);

        this.selectedRow = this._rendererService.selectedRow;
    }

    selectComponent(component: RenderedComponent) {
       /// this._stylerService.selectComponent(index, rowIndex);
        this._rendererService.selectComponent(component);
    }
}
