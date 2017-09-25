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
        keywords: ''
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
    },
    UPDATE_MERCHANT_FIELD(state, {field, value}) {
        let obj = { [field]: value };
        if()
        Object.assign(state.merchant, obj);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
