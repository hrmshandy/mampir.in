const figures = document.querySelectorAll('figure');


function createNewWrapper(elements) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('c-post-section-inner');

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
       const target = e.target;

        const previousSiblings = getAllElementSiblings(target, 'previous');
        const nextSiblings = getAllElementSiblings(target, 'next');

        const newPreviousNode = createNewWrapper(previousSiblings);
        const newNextNode = createNewWrapper(nextSiblings);

        console.log(e);

        // if(!document.body.contains(newPreviousNode)) {
        //     target.parentNode.parentNode.insertBefore(newPreviousNode, target.parentNode);
        // }
        // if(!document.body.contains(newNextNode)) {
        //     target.parentNode.parentNode.insertBefore(newNextNode, target.parentNode.nextSibling);
        // }
    });

}