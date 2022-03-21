import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class CounterOfActiveSlide extends RootComponent {
    readonly counter: HTMLDivElement;
    readonly button: HTMLButtonElement;

    public count: number;
    public buttonAction: any;

    constructor(props: IRootComponent, buttonAction: any) {
        // поставить нормальный тип
        super(props);

        this.buttonAction = buttonAction;

        this.counter = this.node.querySelector(`.${this.name}__counter`);
        this.button = this.node.querySelector(`.${this.name}__button`);
        this.count = 0;

        this.counter.innerHTML = this.count.toString();

        this.button.addEventListener('click', () => {
            this.nextCount();
        });
    }

    nextCount() {
        this.count++;
        this.counter.innerHTML = this.count.toString();
        this.buttonAction();
    }
}

export default CounterOfActiveSlide;
