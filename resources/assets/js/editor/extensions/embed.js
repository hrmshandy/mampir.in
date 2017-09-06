import MediumEditor from 'medium-editor'
import * as Icon from '../icons'
import * as u from '../helpers'
// import axios from 'axios'

const Embed = MediumEditor.Extension.extend({
    name: 'embed',

    init: function () {
        this.button = this.document.createElement('button');
        this.button.classList.add('medium-editor-action');
        this.button.classList.add('embed-instagram');
        this.button.setAttribute('title', 'embed');
        this.button.innerHTML = Icon.embed();

        this.on(this.button, 'click', this.handleClick.bind(this));

        this.eventHandler();
    },

    getButton: function () {
        return this.button;
    },

    handleClick(e) {
        if(window.getSelection().rangeCount > 0) {
            const selectedElement = this.base.getSelectedParentElement();
            const placeholder = this.placeholder = this.createPlaceHolder();
            let element;
            if(selectedElement.innerHTML === '<br>') {
                element = selectedElement;
                element.classList.add('c-ig-embed');
                element.insertBefore(placeholder.querySelector('span'), element.firstChild );
            } else {
                element = placeholder;
                element.classList.add('c-ig-embed');
                selectedElement.parentNode.insertBefore(element, selectedElement.nextElementSibling);
            }

            this.element = element;

            MediumEditor.selection.moveCursor(document, element, 0);

            this.base.checkContentChanged();
        }

    },

    handleEmbedded(url) {
        const regx = new RegExp('https?:\\/\\/(www\\.)?instagr(\\.am|am\\.com)\\/p\\/.*');
        if(regx.test(url)) {
            const iframe = this.buildIFrame(`/media/${url}`);
            this.element.parentNode.insertBefore(iframe, this.element);
            setTimeout(() => {
                this.element.remove();
            }, 300);
        } else {
            console.log("invalid");
        }
    },

    buildIFrame(url) {
        const figure = document.createElement('figure');
        const iframe = document.createElement('iframe');

        figure.setAttribute('contenteditable', false);
        figure.style.margin = '0';
        figure.style.width = '100%';

        iframe.src = url;
        iframe.className += 'instagram-media instagram-media-rendered';
        iframe.setAttribute('allowtransparency', true);
        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('scrolling', "no");
        iframe.width = 640;
        iframe.height = 600;
        iframe.style.background = '#fff';
        iframe.style.margin = '1px auto 12px';
        iframe.style.display = 'block';
        iframe.style.width = 'calc(100% - 2px)';
        iframe.style.maxWidth = '658px';

        iframe.onload = function() {
            setTimeout(() => {
                iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
            }, 1000);
        };

        figure.appendChild(iframe);

        return figure;
    },

    eventHandler() {
        this.base.subscribe('editableKeydown', (e) => {

            const selectedElement = this.base.getSelectedParentElement();

            if(selectedElement.classList.contains('c-ig-embed')) {
                if(this.element
                    && this.element.querySelector('span')
                    && !(e.keyCode >= 16 && e.keyCode <= 18 )) {
                    this.element.querySelector('span').remove();
                } else {
                    if (MediumEditor.util.isKey(e, [MediumEditor.util.keyCode.ENTER])) {
                        const url = this.element.innerText;
                        this.handleEmbedded(url);
                    }
                }
            }
        });
    },

    createPlaceHolder() {
        const wrapper = document.createElement('p');
        const defaultValue = document.createElement('span');
        const br = document.createElement('br');

        defaultValue.className += 'o-defaultValue o-defaultValue--prompt';
        defaultValue.innerText = 'Paste a link or embed code from Instagram and press Enter';
        wrapper.appendChild(defaultValue);
        wrapper.appendChild(br);

        this.on(defaultValue, 'mousedown', function(e){
            e.preventDefault();
        });

        return wrapper;
    }
});

export default Embed;