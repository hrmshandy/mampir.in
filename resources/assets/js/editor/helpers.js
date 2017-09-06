export const closestParent = (child, match) => {
    if (!child || child == document) {
        return null;
    }
    if (child.classList.contains(match) || child.nodeName.toLowerCase() == match) {
        return child;
    }
    else {
        return closestParent(child.parentNode, match);
    }
};

export const before = (target, newNode) => {
    target.parentNode.insertBefore(newNode, target);
};

export const after = (target, newNode) => {
    target.parentNode.insertBefore(newNode, target.nextSibling);
};

export const isEmpty = (value) => {
    return (value == null || value.length === 0);
};

export const setStyles = (element, styles) => {
    for(let attr in styles) {
        element.style[attr] = styles[attr];
    }
};