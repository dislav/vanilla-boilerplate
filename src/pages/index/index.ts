import { IView, IViewData } from '@barba/core';

import { findComponent } from '@common/utils';
// import Counter from '@components/counter/counter';
import CounterOfActiveSlide from '@components/counterOfActiveSlide/counterOfActiveSlide';
import ModalWindow from '@components/modalWindow/modalWindow';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        // const counter = new Counter(findComponent('counter'));
        function buttonAction() {
            console.log('Действие выполнено!!!');
        }

        const modalWindow = new ModalWindow(
            findComponent('modalWindow', 'modal-window')
        );
        const counterOfActiveSlide = new CounterOfActiveSlide(
            findComponent('counterOfActiveSlide', 'counter-of-active-slide'),
            modalWindow
        );
        console.log(modalWindow);
        // counterOfActiveSlide.nextCount();
        // console.log(counterOfActiveSlide, 'Это мой counter!');
    },
} as IView;
