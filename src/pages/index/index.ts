import { IView, IViewData } from '@barba/core';

import { findComponent } from '@common/utils';
import Counter from '@components/counter/counter';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        new Counter(findComponent('counter'));
    },
} as IView;
