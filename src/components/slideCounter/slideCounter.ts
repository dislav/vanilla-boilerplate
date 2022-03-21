import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class SlideCounter extends RootComponent {
    readonly buttonNext: HTMLButtonElement;
    readonly buttonPrev: HTMLButtonElement;
    readonly counterNode: HTMLDivElement;

    public counter: number;

    constructor(props: IRootComponent) {
        super(props);

        this.buttonNext = this.node.querySelector(`.${this.name}__button-next`);
        this.buttonPrev = this.node.querySelector(`.${this.name}__button-prev`);
        this.counterNode = this.node.querySelector(`.${this.name}__counter`);
        this.counter = 0;

        this.buttonNext.addEventListener('click', () => {
            this.nextCount();
        });

        this.buttonPrev.addEventListener('click', () => {
            this.prevCount();
        });
    }

    public nextCount() {
        this.counter++;
        this.counterNode.innerHTML = this.counter.toString();
    }

    public prevCount() {
        this.counter--;
        this.counterNode.innerHTML = this.counter.toString();
    }
}

export default SlideCounter;
