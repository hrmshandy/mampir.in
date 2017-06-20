const state = {
    authenticated: false,
    user: {
        id: null,
        avatar: null,
        name: null,
        email: null,
        mampirin_stamps: 0,
        venue_stamps: 0
    }
}

const getters = {
    authenticated: state => state.authenticated,
    user: state => state.user
}

const actions = {
    login ({ dispatch, commit }, form) {
        return new Promise((resolve, reject) => {
            form.submit('post', '/login').then(response => {
                localStorage.setItem('access_token', response.access_token);
                commit('SET_UTHENTICATED', true);

                dispatch('fetchUser');

                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    logout ({ commit }) {
        return new Promise((resolve, reject) => {
            //axios.post('/logout').then((response) => {
                localStorage.removeItem('access_token');
                commit('SET_UTHENTICATED', false);
                resolve();
            //}).catch((error) => {
            //    reject(error);
            //});
        });
    },
    register({ dispatch, commit }, form) {
        return new Promise((resolve, reject) => {
            form.submit('post', '/register').then(response => {
                localStorage.setItem('access_token', response.access_token);
                commit('SET_UTHENTICATED', true);

                dispatch('fetchUser');

                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    connect({ dispatch, commit }, { provider, user }) {
        return new Promise((resolve, reject) => {
            axios.post('/oauth/'+provider+'/connect', { user }).then(({ data }) => {
                localStorage.setItem('access_token', data.access_token);
                commit('SET_UTHENTICATED', true);

                dispatch('fetchUser');

                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
    },
    authCheck({ dispatch, commit }) {
        var token = localStorage.getItem('access_token');
        if (token) {
            commit('SET_UTHENTICATED', true);
            dispatch('fetchUser');
        } else {
            commit('SET_UTHENTICATED', false);
        }
    },
    getHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    },
    fetchUser({ state, dispatch, commit }){
        if(state.authenticated) {
            axios.get('/user').then(({data}) => {
                commit('SET_USER', data);
            }).catch(error => {
                localStorage.removeItem('access_token');
                commit('SET_UTHENTICATED', false);
            });
        }
    }
}

const mutations = {
    SET_UTHENTICATED(state, value) {
        state.authenticated = value;
    },
    SET_USER(state, user) {
        state.user.id = user.id;
        state.user.name = user.name;
        state.user.avatar = user.avatar;
        state.user.email = user.email;
        state.user.mampirin_stamps = user.mampirin_stamps;
        state.user.venue_stamps = user.venue_stamps;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
