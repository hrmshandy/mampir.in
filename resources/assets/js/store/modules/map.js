// import Map from '../../api/map'

// const state = {
//     url: App.baseUrl+'/api/geo',
//     mapIsLoading: true,
//     mapIsEmpty: false
// }

// const getters = {
//     mapIsLoading: state => state.mapIsLoading,
//     mapIsEmpty: state => state.mapIsEmpty
// }

// const actions = {
//     loadMap ({ commit }, cb) {
//         let M = new Map;

//         if(M.map === undefined){
//             M.init();
//         }

//         let params = store.state.query;

//         commit('SET_MAP_LOADING')
//         commit('SET_MAP_NOT_EMPTY')

//         Vue.http.get(state.url, {params}).then(response => {
//             commit('LOAD_MAP', { map: M, data: response.data })
//         });

//     }
// }

// const mutations = {
//     LOAD_MAP (state, {map, data}) {
//         map.loadMarker(data);
//         state.mapIsLoading = false;
//         state.mapIsEmpty = false;
//         if(data.length <= 0){
//             state.mapIsEmpty = true;
//         }
//     },
//     SET_MAP_LOADING(state) {
//         state.mapIsLoading = true;
//     },
//     SET_MAP_NOT_EMPTY(state) {
//        state.mapIsEmpty = false;
//     }
// }

// export default {
//     state,
//     getters,
//     actions,
//     mutations
// }