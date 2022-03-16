import { BehaviorSubject, merge } from 'rxjs';

import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

import { findComponent, findComponents } from '@common/utils';
import Button from '@components/button/button';
import Input from '@components/input/input';

class Counter extends RootComponent<HTMLDivElement> {
    readonly input: Input;
    readonly prevButton: Button;
    readonly nextButton: Button;

    readonly clicksEl: HTMLDivElement;

    public count$ = new BehaviorSubject(0);
    public clickCount$ = new BehaviorSubject(0);

    constructor(props: IRootComponent) {
        super(props);

        const buttons = findComponents<HTMLButtonElement>('button', {
            node: this.node,
        }).map((button) => new Button(button));

        this.input = new Input(findComponent('input', { node: this.node }));
        this.prevButton = buttons.find((button) =>
            button.node.classList.contains(`${this.name}__button-prev`)
        );
        this.nextButton = buttons.find((button) =>
            button.node.classList.contains(`${this.name}__button-next`)
        );

        this.clicksEl = this.findNode<HTMLDivElement>('clicks');

        merge(this.prevButton.click$, this.nextButton.click$).subscribe((e) => {
            const target = e.target as HTMLButtonElement;
            const isPrev = target.classList.contains(
                `${this.name}__button-prev`
            );

            this.count$.next(this.count$.getValue() + (isPrev ? -1 : 1));
            this.clickCount$.next(this.clickCount$.getValue() + 1);
        });

        this.count$.subscribe((value) => {
            this.input.setValue(value.toString());

            if (value >= 10) {
                this.nextButton.node.setAttribute('disabled', 'disabled');
            } else if (value <= -10) {
                this.prevButton.node.setAttribute('disabled', 'disabled');
            } else {
                this.nextButton.node.removeAttribute('disabled');
                this.prevButton.node.removeAttribute('disabled');
            }
        });

        this.clickCount$.subscribe(
            (value) => (this.clicksEl.innerHTML = `Clicks: ${value}`)
        );
    }
}

export default Counter;
