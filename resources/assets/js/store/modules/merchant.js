const state = {
    merchant: {
        name: '',
        logo: '',
        cover: '',
        address: '',
        lat: '',
        lng: '',
        phone_number: '',
        email: '',
        website: '',
        opening_hours: '',
        payment_method: '',
        keywords: '',
        operator_name: '',
        operator_email: '',
        operator_password: ''
    }
}

const getters = {
    merchant: state => state.merchant
}

const actions = {
    setMerchant({ dispatch, commit}, value) {
        commit('UPDATE_MERCHANT', value);
    }
}

const mutations = {
    UPDATE_MERCHANT(state, obj) {
        Object.assign(state.merchant, obj);

        localStorage.setItem("merchant", JSON.stringify(state.merchant));
    },
    UPDATE_MERCHANT_FIELD(state, {field, value}) {
        _.set(state.merchant, field, value);

        localStorage.setItem("merchant", JSON.stringify(state.merchant));
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
