const state = {
    listings: []
}

const getters = {
    listings: state => state.listings
}

const actions = {
    search ({ dispatch, commit }, query) {
        return new Promise((resolve, reject) => {
            axios.get('/api/search?'+query).then(({data}) => {
                if(typeof data.data !== 'undefined') {
                    commit('SET_LISTINGS', data.data)
                } else {
                    commit('SET_LISTINGS', data)
                }
                resolve(data)
            }).catch((error) => {
                reject(error)
            })
        });
    }
}

const mutations = {
    SET_LISTINGS(state, value) {
        state.listings = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
