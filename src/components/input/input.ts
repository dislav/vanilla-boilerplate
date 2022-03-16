import { BehaviorSubject, fromEvent } from 'rxjs';

import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Input extends RootComponent<HTMLDivElement> {
    public readonly input: HTMLInputElement;
    public readonly type: string = 'text';

    private readonly errorEl: HTMLDivElement;

    public readonly value$: BehaviorSubject<string>;

    constructor(props: IRootComponent) {
        super(props);

        this.input = this.findNode('input');
        this.type = this.input.type;

        this.errorEl = this.findNode('error');

        this.value$ = new BehaviorSubject(this.input.value);

        fromEvent(this.input, 'input').subscribe(
            this.validate((target) => this.value$.next(target.value))
        );

        this.value$.subscribe((value) => (this.input.value = value));
    }

    private validate =
        (cb?: (target: HTMLInputElement, e: Event) => void) => (e: Event) => {
            const target = e.target as HTMLInputElement;

            cb?.(target, e);
        };

    public getValue = () => this.value$.getValue();

    public setValue = (value: string) => this.value$.next(value);

    public setError = (error: string) => {
        this.node.classList.add('error');
        this.errorEl.innerHTML = error;
    };
}

export default Input;
