class Wrapper
{
    constructor(element) {
        let target = u.closestParent(element, 'o-graf');

        this.add(target, 'previous');
        this.add(target, 'next');
    }

    add(target, direction) {
        const siblings = this.getAllElementSiblings(target, direction);
        const method = (direction === 'previous') ? 'before' : 'after';

        console.log(siblings);

        const parent = u.closestParent(target, 'l-section-inner');

        if(!u.isEmpty(siblings)) {
            const newNode = this.createNewWrapper(siblings);
            if(!document.body.contains(newNode)) {
                u[method](parent, newNode);
            }
        }
    }

    createNewWrapper(elements) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('l-section-inner');
        wrapper.classList.add('l-section-inner--layoutNarrow');

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            wrapper.appendChild(element);
        }

        return wrapper;
    }

    getAllElementSiblings(element, direction) {
        let siblings = [];
        if(!u.isEmpty(element)) {
            let node = element[`${direction}ElementSibling`] || element[`${direction}Sibling`],
                method = (direction === 'previous') ? 'unshift' : 'push';

            while (node && node.nodeType === Node.ELEMENT_NODE && node !== element) {
                siblings[method](node);
                node = node[`${direction}ElementSibling`] || node[`${direction}Sibling`];
            }
        }

        return siblings;
    }
}

export default Wrapper;