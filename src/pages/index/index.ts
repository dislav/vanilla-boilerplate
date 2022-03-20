import { IView, IViewData } from '@barba/core';

import { findComponent } from '@common/utils';
import Counter from '@components/counter/counter';
import MainContainer from '@components/mainContainer/mainContainer';
import Swiper, { Navigation, Pagination } from 'swiper';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        const counter = new MainContainer(findComponent('mainContainer'));
    },
} as IView;
