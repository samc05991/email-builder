import { Component, OnInit } from '@angular/core';
import { RenderedComponent } from 'src/models/RenderedComponent';
import { RenderedRow } from 'src/models/RenderedRow';
import { RendererService } from 'src/services/RendererService';

@Component({
    selector: 'app-email-structure',
    templateUrl: './email-structure.component.html',
    styleUrls: ['./email-structure.component.scss']
})
export class EmailStructureComponent implements OnInit {

    constructor(private _rendererService: RendererService) { }


    ngOnInit(): void {
    }

    addRow(columns: number) {
        let row = new RenderedRow({
            columns: columns,
            components: []
        });

        this.createRow(row);
    }

    createRow(row: RenderedRow) {
        this._rendererService.addRow(row)
    }
}
