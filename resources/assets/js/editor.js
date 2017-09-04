import MediumEditor from 'medium-editor'
import DefaultOptions from './editor/default-options'

import Toolbar from './editor/toolbar'
import Insert from './editor/insert'

class Editor
{
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, DefaultOptions, options);

        this.init();
    }

    init() {
        this.editor = new MediumEditor(this.element, this.options);

        this.toolbar = new Toolbar(this.editor);
    }


}

new Editor('.js-postField');

const figures = document.querySelectorAll('figure');

const closestParent = (child, match) => {
    if (!child || child == document) {
        return null;
    }
    if (child.classList.contains(match) || child.nodeName.toLowerCase() == match) {
        return child;
    }
    else {
        return closestParent(child.parentNode, match);
    }
}

function createNewWrapper(elements) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('l-section-inner');
    wrapper.classList.add('l-section-inner--layoutNarrow');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        wrapper.appendChild(element);
    }

    return wrapper;
}

function getAllElementSiblings(element, direction) {
    let siblings = [],
        node = element[`${direction}ElementSibling`] || element[`${direction}Sibling`];

    while( node && node.nodeType === Node.ELEMENT_NODE && node !== element ) {
        siblings.push( node );
        node = node[`${direction}ElementSibling`] || node[`${direction}Sibling`];
    }

    return siblings;
}

for (let i = 0; i < figures.length; i++) {
    const figure = figures[i];

    figure.addEventListener('click', function(e){
        let target = e.target;

        target = closestParent(target, 'figure');

        const previousSiblings = getAllElementSiblings(target, 'previous');
        const nextSiblings = getAllElementSiblings(target, 'next');

        const newPreviousNode = createNewWrapper(previousSiblings);
        const newNextNode = createNewWrapper(nextSiblings);

        if(!document.body.contains(newPreviousNode)) {
            target.parentNode.parentNode.insertBefore(newPreviousNode, target.parentNode);
        }
        if(!document.body.contains(newNextNode)) {
            target.parentNode.parentNode.insertBefore(newNextNode, target.parentNode.nextSibling);
        }
    });

}