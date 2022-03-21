import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class CounterOfActiveSlide extends RootComponent {
    readonly counter: HTMLDivElement;
    readonly button: HTMLButtonElement;

    public count: number;
    public modalObject: any;

    constructor(props: IRootComponent, modalObject: any) {
        // поставить нормальный тип
        super(props);

        this.modalObject = modalObject;

        this.counter = this.node.querySelector(`.${this.name}__counter`);
        this.button = this.node.querySelector(`.${this.name}__button`);
        this.count = 0;

        this.counter.innerHTML = this.count.toString();

        this.button.addEventListener('click', () => {
            this.openTheWindow();
        });
    }

    openTheWindow() {
        // this.count++;
        // this.counter.innerHTML = this.count.toString();
        this.modalObject.openTheWindow();
    }
}

export default CounterOfActiveSlide;
