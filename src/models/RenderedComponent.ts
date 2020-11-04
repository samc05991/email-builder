export class RenderedComponent {
    id: string;
    name: string;
    icon: string;
    styles: {};

    constructor(data) {
        Object.assign(this, data)
    }
}