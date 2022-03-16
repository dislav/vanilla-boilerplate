import { FindComponentOptions, IRootComponent } from '@common/types';

export const findComponent = <T extends Element>(
    name: string,
    options?: FindComponentOptions
): IRootComponent<T> => ({
    name,
    node: (options?.node ?? document).querySelector(`.${name}`),
});

export const findComponents = <T extends Element>(
    name: string,
    options?: FindComponentOptions
): IRootComponent<T>[] =>
    Array.from((options?.node ?? document).querySelectorAll(`.${name}`)).map(
        (node: T) => ({
            name,
            node,
        })
    );
