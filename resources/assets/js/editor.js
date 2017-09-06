import MediumEditor from 'medium-editor'
import DefaultOptions from './editor/default-options'

import Toolbar from './editor/toolbar'
import Insert from './editor/insert/index'

import ToolbarExtensions from './editor/extensions/toolbar'

import * as u from './editor/helpers'

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
        new ToolbarExtensions();
    }


}

new Editor('.js-postField');