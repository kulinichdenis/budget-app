const initialState = {
	showModal: false
}

export default (state=initialState, action) => {
	switch(action.type) {
		case 'SHOW_MODAL':
			return { showModal: action.show }
		case 'HIDE_MODAL':
			return { showModal: action.show }
		default:
			return state
	}
}