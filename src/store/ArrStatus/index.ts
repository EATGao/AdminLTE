export default {
	state: {
		arr: [10, 20, 30]
	},
	actions: {
		arrPush(newState: {arr: number[]}, action: {type: string, value: number}){
			newState.arr.push(action.value)
		},
	},
	arrPush: "arrPush"
}