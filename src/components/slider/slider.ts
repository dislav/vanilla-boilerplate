import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Slider extends RootComponent {
    readonly buttonNext: HTMLButtonElement;
    readonly buttonPrev: HTMLButtonElement;

    constructor(props: IRootComponent, swiper) {
        super(props);

        // Здесь слайды внутри swiper видны!
        // this.slides = swiper.slides
        this.buttonNext = this.node.querySelector('.swiper-button-next');
        this.buttonPrev = this.node.querySelector('.swiper-button-prev');

        this.buttonNext.addEventListener('click', () => {
            swiper.slideNext();
        });

        this.buttonPrev.addEventListener('click', () => {
            swiper.slidePrev();
        });
    }
}

export default Slider;
