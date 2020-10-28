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
        console.log(item);
        this._rendererService.add(item)
    }

    createComponents() {
        let components = [{
            name:"Image",
            icon:"fa-toolbox",
        }, 
        {
            name:"Header",
            icon:"fa-user",
        },
        {
            name:"Container",
            icon:"fa-box",
        },
        {
            name:"Footer",
            icon:"fa-shoe-prints",
        },
        {
            name:"Text",
            icon:"fa-text-width",
        },
        {
            name:"Heading",
            icon:"fa-heading",
        },
        {
            name:"Card",
            icon:"fa-heading",
        }];

        for (let i = 0; i < components.length; i++) {
            this.componentList.push(new RenderedComponent(components[i]))
        }
    }
}
