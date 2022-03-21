import { IView, IViewData } from '@barba/core';

import { findComponent } from '@common/utils';
// import Counter from '@components/counter/counter';
import CounterOfActiveSlide from '@components/counterOfActiveSlide/counterOfActiveSlide';
import ModalWindow from '@components/modalWindow/modalWindow';
import Slider from '@components/slider/slider';
import { Swiper, SwiperOptions } from 'swiper';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        // const counter = new Counter(findComponent('counter'));
        // function buttonAction() {
        //     console.log('Действие выполнено!!!');
        // }

        const swiperParams: SwiperOptions = {
            slidesPerView: 1,
            spaceBetween: 50,
            slideActiveClass: 'swiper-active-slide',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };

        const swiper = new Swiper('.swiper', swiperParams);

        const modalWindow = new ModalWindow(
            findComponent('modalWindow', 'modal-window')
        );
        const counterOfActiveSlide = new CounterOfActiveSlide(
            findComponent('counterOfActiveSlide', 'counter-of-active-slide'),
            modalWindow
        );
        const slider = new Slider(findComponent('slider'), swiper);
        // counterOfActiveSlide.nextCount();
        // console.log(counterOfActiveSlide, 'Это мой counter!');
    },
} as IView;
