import { IRootComponent } from '@common/types';

export const findComponent = <T extends Element = Element>(
    name: string
): IRootComponent<T> => ({
    name,
    node: document.querySelector(`.${name}`),
});

export const findComponents = <T extends Element = Element>(
    name: string
): IRootComponent<T>[] =>
    Array.from(document.querySelectorAll(`.${name}`)).map((node: T) => ({
        name,
        node,
    }));

export const emit = <T = any>(name: string, data?: T, element: Document | HTMLElement = document, shouldBubble = false) => {
    let evt;
    if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(name, {
            detail: data,
            bubbles: shouldBubble,
        });
    } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(name, shouldBubble, false, data);
    }
    element.dispatchEvent(evt);
};

export const listen = (name: string, handler: (e?: CustomEvent) => void, element: Document | Element = document) => {
    element.addEventListener(name, handler);
};

export const unlisten = (name: string, handler: (e?: CustomEvent) => void, element: Document | Element = document) => {
    element.removeEventListener(name, handler);
};

export const isIe = () => {
    const agent = window.navigator.userAgent;
    const msie = agent.indexOf('MSIE ');

    return msie > -1 || !!navigator.userAgent.match(/Trident.*rv:11\./);
};
