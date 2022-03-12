import { IViewData } from '@barba/core';
import { IRootComponent } from '@common/types';

class RootComponent<T extends Element = Element> {
    public name: string;
    public node: T;
    public data: IViewData;

    public destroy: () => void;

    constructor({ name, node, data }: IRootComponent) {
        this.name = name;
        this.node = node as T;
        this.data = data;
    }
}

export default RootComponent;
