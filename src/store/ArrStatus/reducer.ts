import handleArr from "./index.ts"

// create repository
let reducer = (state = {...handleArr.state}, action:{type: string, value: number}) => {
	let newState = JSON.parse(JSON.stringify(state))

	switch (action.type) {
		case handleArr.arrPush:
			handleArr.actions.arrPush(newState, action)
			break;
		default:
			break;
	}

	return newState
}

export default reducer