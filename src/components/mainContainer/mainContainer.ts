import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import ModalWindow from '../modalWindow/modalWindow';
import { findComponent } from '@common/utils';
import { BehaviorSubject, fromEvent } from 'rxjs';

class MainContainer extends RootComponent<HTMLDivElement> {
    readonly count: HTMLDivElement;
    readonly openButton: HTMLButtonElement;
    readonly modalWindow: ModalWindow;

    constructor(props: IRootComponent) {
        super(props);

        this.modalWindow = new ModalWindow(findComponent('modalWindow'));
        this.openButton = this.node.querySelector(`.${this.name}__openButton`);
        this.count = this.node.querySelector(`.${this.name}__count`);

        fromEvent(this.openButton, 'click').subscribe((target) => {
            this.modalWindow.toggleW();
        });

        this.modalWindow.currentValue$.subscribe((target) => {
            this.count.textContent = `${target}`;
        });
    }
}

export default MainContainer;
