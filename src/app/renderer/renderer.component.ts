import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { RenderedComponent } from 'src/models/RenderedComponent';
import { RendererService } from 'src/services/RendererService';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RendererComponent implements OnInit {

    components = [];

    constructor(private _rendererService: RendererService) {
        _rendererService.itemAdded$.subscribe((item: RenderedComponent) => this.components.push(item));
    }

    ngOnInit(): void {

    }
}
