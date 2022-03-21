import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class ModalWindow extends RootComponent {
    readonly modalWindow: Element;
    readonly button: HTMLButtonElement;

    constructor(props: IRootComponent) {
        super(props);

        this.button = this.node.querySelector(`.${this.name}__button`);
        this.modalWindow = this.node;

        this.button.addEventListener('click', () => {
            this.closeTheWindow();
        });
    }

    openTheWindow() {
        // console.log('Окно открыто!')
        this.modalWindow.classList.remove('is-close');
        // this.modalWindow.classList.add('is-open')
    }

    closeTheWindow() {
        // console.log('Окно закрыто!')
        // this.modalWindow.classList.remove('is-open');
        this.modalWindow.classList.add('is-close');
    }
}

export default ModalWindow;
