import Map from '../../api/map'

const state = {
    url: '/api/search',
    mapIsLoading: true,
    mapIsEmpty: false
}

const getters = {
    mapIsLoading: state => state.mapIsLoading,
    mapIsEmpty: state => state.mapIsEmpty
}

const actions = {
    loadMap ({ commit }, data) {
        return new Promise((resolve, reject) => {
            let M = new Map;

            if(M.map === undefined){
                M.init();
            }
            setTimeout(() => {
                M.loadMarker(data);
            }, 1000);

        });
    }
}

const mutations = {
    LOAD_MAP (state, {map, data}) {
        map.loadMarker(data);
        state.mapIsLoading = false;
        state.mapIsEmpty = false;
        if(data.length <= 0){
            state.mapIsEmpty = true;
        }
    },
    SET_MAP_LOADING(state) {
        state.mapIsLoading = true;
    },
    SET_MAP_NOT_EMPTY(state) {
       state.mapIsEmpty = false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}