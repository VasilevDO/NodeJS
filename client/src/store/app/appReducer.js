/* eslint-disable default-param-last */
// Import { SHOW_LOADER,HIDE_LOADER, GET_USER, SET_USER, APP_START_PROCESSING, APP_END_PROCESSING } from "./types"

const initialState = {
	user: null,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return {...state};
	}
};
