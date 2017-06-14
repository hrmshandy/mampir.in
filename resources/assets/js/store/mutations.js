export const QUERY = (state, query) => {
	state.query = query;
}

export const SET_KEYWORD = (state, value) => {
	state.query.keyword = value;
}

export const SET_LOCATION = (state, value) => {
	state.query.location = value;
}
