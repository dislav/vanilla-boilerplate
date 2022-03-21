import { IView, IViewData } from '@barba/core';
import { findComponent } from '@common/utils';
import MainContainer from '@components/mainContainer/mainContainer';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        const counter = new MainContainer(findComponent('main-container'));
    },
} as IView;
