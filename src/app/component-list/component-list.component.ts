import { Component, OnInit, Renderer2 } from '@angular/core';
import { RendererService } from 'src/services/RendererService';
import { RenderedComponent } from '../../models/RenderedComponent';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent implements OnInit {

    componentList: RenderedComponent[] = [];

    constructor(private _renderer: Renderer2, private _rendererService: RendererService) { }

    ngOnInit(): void {
        this.createComponents();
    }

    renderHtml(item: RenderedComponent) {
        this._rendererService.add(item)
    }

    createComponents() {
        let components = [{
            name:"Image",
            icon:"fa-image",
        }, 
        {
            name:"Section",
            icon:"fa-box",
        },
        {
            name:"Text",
            icon:"fa-font",
        },
        {
            name:"Card",
            icon:"fa-square",
        }];

        for (let i = 0; i < components.length; i++) {
            this.componentList.push(new RenderedComponent(components[i]))
        }
    }
}
