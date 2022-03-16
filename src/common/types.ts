import { IViewData } from '@barba/core';

export interface IRootComponent<T = Element> {
    name: string;
    node: T;
    data?: IViewData;
}

export interface FindComponentOptions {
    node?: Element;
}

export interface FindNodeOptions {
    separator?: string;
    node?: Element;
}
