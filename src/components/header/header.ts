import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Header extends RootComponent<HTMLDivElement> {
    constructor(props: IRootComponent) {
        super(props);
    }
}

export default Header;
