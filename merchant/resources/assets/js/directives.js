import Vue from 'vue'

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function updateValue(el, value) {
    value = value.replace(/[^0-9]/g, '');

    el.value = addCommas(value);
}

Vue.directive('money', {
    bind(el) {
        updateValue(el, el.value)

        el.addEventListener('input', (e) => {
            updateValue(el, e.target.value)
        })
        el.addEventListener('change', (e) => {
            updateValue(el, e.target.value)
        })
    },
    update(el) {
        updateValue(el, el.value);
    },
    componentUpdated(el) {
        updateValue(el, el.value);
    }
})