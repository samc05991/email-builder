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

    constructor(private _rendererService: RendererService, private _stylerService: StylerService) {
        // _rendererService.itemAdded$.subscribe((item: RenderedComponent) => this.rows.push(item));
        this.rows = _rendererService.renderedRows;
    }

    ngOnInit(): void {

    }

    selectRow(index: number, row: RenderedRow) {
        this._stylerService.selectRow(index);
        this._rendererService.selectRow(row);
    }

    selectComponent(index: number, rowIndex: number) {
        this._stylerService.selectComponent(index, rowIndex);
    }
}
