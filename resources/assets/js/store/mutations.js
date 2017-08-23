export const QUERY = (state, query) => {
	state.query = query;
}

export const SET_KEYWORD = (state, value) => {
	state.query.keyword = value;
}

export const SET_LOCATION = (state, value) => {
	state.query.location = value;
}

export const SET_AREA = (state, value) => {
    state.query.area = value;
}

export const SHOW_HEADER = (state, value) => {
    state.header = value;
}

export const SHOW_FOOTER = (state, value) => {
    state.footer = value;
}

export const SHOW_TOP_SEARCH = (state, value) => {
    state.topSearch = value;
}

export const SHOW_NAVBAR_POST = (state, value) => {
    state.navbarPost = value;
}