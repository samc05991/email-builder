import { Component, OnInit } from '@angular/core';
import { RenderedComponent } from 'src/models/RenderedComponent';
import { RendererService } from 'src/services/RendererService';
import { StylerService } from 'src/services/StylerService';

@Component({
    selector: 'app-selected-element',
    templateUrl: './selected-element.component.html',
    styleUrls: ['./selected-element.component.scss']
})
export class SelectedElementComponent implements OnInit {
    selectedElement: any;

    constructor(private _rendererService: RendererService, private _stylerService: StylerService) {
        this.selectedElement = _stylerService.element;
    }

    ngOnInit(): void {

    }
}
