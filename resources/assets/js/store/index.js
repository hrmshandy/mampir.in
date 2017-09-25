import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import auth from './modules/auth'
import search from './modules/search'
import map from './modules/map'
import merchant from './modules/merchant'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex);

const store = new Vuex.Store({
  	state,
 	getters,
  	actions,
  	mutations,
  	modules: {
    	auth,
		map,
		search,
		merchant
  	},
  	strict: debug,
});

window.store = store;
export default store;
