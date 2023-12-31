export default {
	state: {
		num: 20
	},
	actions: {
		plusOne(newState: {num: number}, action: {type: string}){
			newState.num++
		},
		plusTwo(newState: {num: number}, action: {type: string, value: number}){
			newState.num += action.value
		},
	},
	plusOne: "plusOne",
	plusTwo: "plusTwo"
}