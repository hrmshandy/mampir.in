window.closestParent = (child, match) => {
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

window.serialize = (obj, prefix) => {
    let str = [], p;
    for(p in obj) {
        if (obj.hasOwnProperty(p)) {
            let k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push((v !== null && typeof v === "object") ?
                serialize(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&");
}

window.clean = (obj) => {
    let newObj = Object.assign({}, obj);
    let propNames = Object.getOwnPropertyNames(newObj);
    for (let i = 0; i < propNames.length; i++) {
        let propName = propNames[i];
        if (newObj[propName] === null || newObj[propName] === undefined) {
            delete newObj[propName];
        }
    }

    return newObj;
}

Vue.prototype.makeRequest = (url, query = '') => {
    let Q = serialize(query);
    if(!_.isEmpty(query)) {
        url += (url.includes("?") ? '&' : '?') + Q;
    }
    return new Promise((resolve, reject) => {
        axios.get(url).then(({data}) => {
            setTimeout(() => {
                this.loading = false;
            }, 1000);

            resolve(data);
        }).catch(error => {
            reject(error);
        });
    });
};