import handleNum from "./index.ts"

// create repository
let reducer = (state = {...handleNum.state}, action:{type: string, value: number}) => {
	// console.log("Execute")
	let newState = JSON.parse(JSON.stringify(state))

	switch (action.type) {
		case handleNum.plusOne:
			handleNum.actions.plusOne(newState, action)
			break;
		case handleNum.plusTwo:
			handleNum.actions.plusTwo(newState, action)
			break;
		default:
			break;
	}

	return newState
}

export default reducer