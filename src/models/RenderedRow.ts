import { RenderedComponent } from './RenderedComponent';

export class RenderedRow {
    id: string;
    columns: number;
    components: RenderedComponent[];
    styles: {} = {
        "display": "grid",
        "grid-template-columns": ""
    };

    constructor(data) {
        Object.assign(this, data);

        for(let i = 0; i < this.columns; i++) {
            this.styles["grid-template-columns"] = `${this.styles["grid-template-columns"]} auto`;
        }
    }
}