import { IViewData } from '@barba/core';
import { FindNodeOptions, IRootComponent } from '@common/types';

class RootComponent<T extends Element = Element> {
    public readonly name: string;
    public readonly node: T;
    public readonly data: IViewData;

    public constructor({ name, node, data }: IRootComponent) {
        this.name = name;
        this.node = node as T;
        this.data = data;
    }

    protected findNode = <T extends Element>(
        selector: string,
        options: FindNodeOptions = {
            separator: '__',
        }
    ): T =>
        (options.node ?? this.node).querySelector(
            `.${this.name}${options.separator}${selector}`
        );

    protected findNodes = <T extends Element>(
        selector: string,
        options: FindNodeOptions = {
            separator: '__',
        }
    ): T[] =>
        Array.from(
            this.node.querySelectorAll(
                `.${this.name}${options.separator}${selector}`
            )
        );
}

export default RootComponent;
