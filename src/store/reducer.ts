
const defaultState = {
	num: 20
}

// create repository
let reducer = (state = defaultState) => {
	let newState = JSON.parse(JSON.stringify(state))



	return newState
}

export default reducer