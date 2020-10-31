import { RenderedComponent } from './RenderedComponent';

export class RenderedRow {
    id: string;
    columns: number;
    components: RenderedComponent[];

    constructor(data) {
        Object.assign(this, data)
    }
}