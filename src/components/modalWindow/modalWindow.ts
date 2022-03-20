import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import { BehaviorSubject, fromEvent } from 'rxjs';
import Swiper, { Navigation, Pagination, SwiperOptions } from 'swiper';

class ModalWindow extends RootComponent<HTMLDivElement> {
    readonly prevButton: HTMLButtonElement;
    readonly nextButton: HTMLButtonElement;
    readonly closeButton: HTMLButtonElement;
    readonly slideValue: HTMLDivElement;
    readonly slidesArr: HTMLCollectionBase;
    readonly valuesArr: number[];
    readonly swiper: Swiper;
    readonly swaiperOptions: SwiperOptions = {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
    };

    public toggleW: () => void;
    public setIndex: (index: number) => void;
    public currentValue$ = new BehaviorSubject(0);
    public currentIndex$ = new BehaviorSubject(0);

    constructor(props: IRootComponent) {
        super(props);

        this.prevButton = this.node.querySelector(`.${this.name}__button-prev`);
        this.nextButton = this.node.querySelector(`.${this.name}__button-next`);
        this.closeButton = this.node.querySelector(
            `.${this.name}__closeButton`
        );
        this.slideValue = this.node.querySelector(`.${this.name}__value`);
        this.slidesArr = this.node
            .querySelector(`.${this.name}__swiper`)
            .querySelectorAll(`.swiper-slide`);
        this.valuesArr = new Array(this.slidesArr.length).fill(0);
        this.toggleW = this.toggleWindow.bind(this);
        this.setIndex = this.setCurrentIndex.bind(this);

        this.swiper = new Swiper(`.${this.name}__swiper`, this.swaiperOptions);

        this.currentValue$.subscribe((target) => {
            this.slideValue.textContent = `${target}`;
            this.valuesArr[this.currentIndex$.getValue()] = target;
        });

        this.currentIndex$.subscribe((target) => {
            this.currentValue$.next(this.valuesArr[target]);
        });

        fromEvent(this.closeButton, 'click').subscribe((target) => {
            this.toggleW();
        });

        fromEvent([this.prevButton, this.nextButton], 'click').subscribe(
            (target) => {
                const button = target.target as HTMLButtonElement;
                const isPrev = button.classList.contains(
                    `${this.name}__button-prev`
                );
                const value: number =
                    this.currentValue$.getValue() + (isPrev ? -1 : 1);
                this.currentValue$.next(value);
            }
        );

        this.swiper.on('slideChange', (swiper) => {
            this.setIndex(swiper.activeIndex);
        });
    }
    private setCurrentIndex(index: number): void {
        this.currentIndex$.next(index);
    }
    private toggleWindow(): void {
        this.node.classList.toggle('is-open');
    }
}

export default ModalWindow;
