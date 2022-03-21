import { IView, IViewData } from '@barba/core';

import { findComponent } from '@common/utils';
// import Counter from '@components/counter/counter';
import CounterOfActiveSlide from '@components/counterOfActiveSlide/counterOfActiveSlide';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        // const counter = new Counter(findComponent('counter'));
        function buttonAction() {
            console.log('Действие выполнено!!!');
        }
        const counterOfActiveSlide = new CounterOfActiveSlide(
            findComponent('counterOfActiveSlide', 'counter-of-active-slide'),
            buttonAction
        );
        counterOfActiveSlide.nextCount();
        console.log(counterOfActiveSlide, 'Это мой counter!');
    },
} as IView;
