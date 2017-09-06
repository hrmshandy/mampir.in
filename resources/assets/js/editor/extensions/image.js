import MediumButton from 'medium-button';
import * as Icon from '../icons'

class Image extends MediumButton
{
    constructor() {
        let options = {
            label: Icon.image(),
            action: () => {
                alert("image");
            }
        };
        super(options);
    }

    options() {
        return {
            label: Icon.image(),
            action: this.action
        }
    }

    action(html, mark, parent) {
        alert("image");

        return html;
    }
}

export default Image;