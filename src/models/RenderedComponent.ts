export class RenderedComponent {
    id: string;
    name: string;
    icon: string;

    constructor(data) {
        Object.assign(this, data)
    }
}