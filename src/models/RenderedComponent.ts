export class RenderedComponent {
    name: string;
    icon: string;

    constructor(data) {
        Object.assign(this, data)
    }
}