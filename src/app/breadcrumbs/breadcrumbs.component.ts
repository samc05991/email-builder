import { Component, OnInit } from '@angular/core';
import { RendererService } from 'src/services/RendererService';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
    rows: any = [];

    constructor(private _rendererService: RendererService) {
        this.rows = _rendererService.renderedRows;
    }

    ngOnInit(): void {
    }

    selectElement(element: any) {

    }
}
