const numStore = {
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
	} as {[key: string]: Function},
	actionNames: {} as { [key: string]: string }
}

let actionNames: { [key: string]: string } = {}

for (let key in numStore.actions) {
	actionNames[key] = key
}

numStore.actionNames = actionNames;

export default numStore