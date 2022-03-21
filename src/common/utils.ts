import { IRootComponent } from '@common/types';

export const findComponent = <T extends Element = Element>(
    name: string,
    secondName?: string
): IRootComponent<T> => ({
    name: secondName ? secondName : name,
    node: document.querySelector(`.${secondName ? secondName : name}`),
});

export const findComponents = <T extends Element = Element>(
    name: string,
    secondName?: string
): IRootComponent<T>[] =>
    Array.from(
        document.querySelectorAll(`.${secondName ? secondName : name}`)
    ).map((node: T) => ({
        name: secondName ? secondName : name,
        node,
    }));
