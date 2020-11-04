import { Component, OnInit } from '@angular/core';
import { StylerService } from 'src/services/StylerService';

@Component({
    selector: 'app-styler',
    templateUrl: './styler.component.html',
    styleUrls: ['./styler.component.scss']
})
export class StylerComponent implements OnInit {

    constructor(private _stylerService: StylerService) {

    }

    ngOnInit(): void {

    }

    textAlignLeft() {
        this._stylerService.textAlignLeft();
    }
    textAlignCenter() {
        this._stylerService.textAlignCenter();
    }
    textAlignRight() {
        this._stylerService.textAlignRight();
    }
}
