import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import ModalWindow from '@components/modalWindow/modalWindow';

class CounterOfActiveSlide extends RootComponent {
    readonly counter: HTMLDivElement;
    readonly button: HTMLButtonElement;

    public count: number;
    public modalObject: ModalWindow;

    constructor(props: IRootComponent, modalObject: ModalWindow) {
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
        this.modalObject.openTheWindow();
    }
}

export default CounterOfActiveSlide;
