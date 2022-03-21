import { IView, IViewData } from '@barba/core';

import { findComponent, findComponents } from '@common/utils';
// import Counter from '@components/counter/counter';
import CounterOfActiveSlide from '@components/counterOfActiveSlide/counterOfActiveSlide';
import ModalWindow from '@components/modalWindow/modalWindow';
import Slider from '@components/slider/slider';
import SlideCounter from '@components/slideCounter/slideCounter';

import { Swiper, SwiperOptions } from 'swiper';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        const swiperParams: SwiperOptions = {
            slidesPerView: 1,
            spaceBetween: 50,
            slideActiveClass: 'swiper-active-slide',
        };

        const swiper = new Swiper('.swiper', swiperParams);
        const slideCounters = findComponents(
            'slideCounter',
            'slide-counter'
        ).forEach((slideCounter) => {
            return new SlideCounter(slideCounter);
        });
        const modalWindow = new ModalWindow(
            findComponent('modalWindow', 'modal-window')
        );
        const slider = new Slider(findComponent('slider'), swiper);
        const counterOfActiveSlide = new CounterOfActiveSlide(
            findComponent('counterOfActiveSlide', 'counter-of-active-slide'),
            modalWindow
        );
    },
} as IView;
