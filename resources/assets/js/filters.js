Vue.filter('capitalize', (value) => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('dateFromNow', (value) => {
    return moment(value).fromNow();
});

Vue.filter('dateFormat', (value, format) => {
    return moment(value).format(format);
});

Vue.filter('join', (value, sparator = ', ') => {
    return value.join(sparator);
});

Vue.filter('joinBy', (value, field = 'name', sparator = ', ') => {
    return value.map(item => item[field]).join(sparator);
});

Vue.filter('strLimit', (value, length = 100) => {
    let result = value;
    if(value.length > length) {
        result = value.substring(0, length).trim()+'...';
    }

    return result;
});
