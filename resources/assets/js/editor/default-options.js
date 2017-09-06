import * as Icon from './icons'
import AutoList from './autolist'
import Embed from './extensions/embed'

export default {
    toolbar: {
        buttons: [{
            name: 'bold',
            contentDefault: Icon.bold()
        }, {
            name: 'italic',
            contentDefault: Icon.italic()
        }, {
            name: 'anchor',
            contentDefault: Icon.link()
        }, {
            name: 'quote',
            contentDefault: Icon.quote()
        }, {
            name: 'h2',
            contentDefault: Icon.text()
        }, {
            name: 'h3',
            contentDefault: Icon.text('font-size: 14px;margin-top: 8px;')
        }, 'embed'],
        static: true,
        //sticky: true
    },
    anchorPreview: false,
    forcePlainText: false,
    cleanPastedHTML: true,
    extensions: {
        'autolist': new AutoList(),
        'embed': new Embed()
    },

}