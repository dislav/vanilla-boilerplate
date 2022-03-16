import { fromEvent, Observable } from 'rxjs';

import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Button extends RootComponent {
    public click$: Observable<Event>;

    constructor(props: IRootComponent) {
        super(props);

        this.click$ = fromEvent(this.node, 'click');
    }
}

export default Button;
