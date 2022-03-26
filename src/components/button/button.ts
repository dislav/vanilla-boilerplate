import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Button extends RootComponent {
    public button: HTMLButtonElement;
    public buttonAction;
    public buttonSelector: string;

    constructor(props: IRootComponent, buttonSelector: string, buttonAction) {
        super(props);

        this.buttonSelector = buttonSelector;
        this.buttonAction = buttonAction;

        this.button = this.node.querySelector(buttonSelector);
        this.button.addEventListener('click', buttonAction());
    }
}

export default Button;
