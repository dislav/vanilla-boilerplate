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
        this.modalWindow.classList.remove('is-close');
    }

    closeTheWindow() {
        // Здесь слайды внутри swiper не видны!
        // this.modalWindow.classList.remove('is-open');
        // this.count = this.swiper.slides[this.swiper.activeIndex]
        //     .querySelector('.slide-counter__counter')
        //     .innerHTML;
        // this.counter.innerHTML = this.count.toString();

        this.modalWindow.classList.add('is-close');

        // Ересь. Передача значения счетчика активного слайда на главный экран
        document.querySelector('.counter-of-active-slide__counter').innerHTML =
            this.node
                .querySelector('.swiper-slide.swiper-active-slide')
                .querySelector('.slide-counter__counter').innerHTML;
    }
}

export default ModalWindow;
