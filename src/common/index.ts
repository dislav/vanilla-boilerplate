import barba, { IViewData } from '@barba/core';

// Styles
import '@styles/globals.scss';

import pages from '@common/pages';

// Common components
import Header from '@components/header/header';
import { findComponent } from '@common/utils';

barba.init({
    views: pages,
});

barba.hooks.afterEnter((data: IViewData) => {
    const header = new Header(findComponent('header'));
});
