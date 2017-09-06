import MediumEditor from 'medium-editor'
import DefaultOptions from './default-options'

import * as u from './helpers'

window.u = u;
window.MediumEditor = MediumEditor;

class Editor
{
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, DefaultOptions, options);

        this.init();
    }

    init() {
        this.editor = new MediumEditor(this.element, this.options);
    }
}

export default Editor;