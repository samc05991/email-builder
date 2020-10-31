import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { RenderedComponent } from 'src/models/RenderedComponent';
import { RendererService } from 'src/services/RendererService';
import { StylerService } from 'src/services/StylerService';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RendererComponent implements OnInit {

    components = [];

    constructor(private _rendererService: RendererService, private _stylerService: StylerService) {
        _rendererService.itemAdded$.subscribe((item: RenderedComponent) => this.components.push(item));
    }

    ngOnInit(): void {

    }

    selectElement(index: number) {
        this._stylerService.selectElement(index);
    }
}
