import * as Icon from './icons'
import AutoList from './autolist'

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
            contentDefault: Icon.text('font-size: 14px;margin-top: 4px;')
        }]
    },
    anchorPreview: false,
    forcePlainText: false,
    cleanPastedHTML: true,
    extensions: {
        'autolist': new AutoList()
    }
}