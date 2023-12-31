const arrStore = {
	state: {
		arr: [10, 20, 30]
	},
	actions: {
		arrPush(newState: {arr: number[]}, action: {type: string, value: number}){
			newState.arr.push(action.value)
		},
	} as { [key:string] : Function								},
	actionNames: {} as { [key:string] : string}
}				

let actionNames: { [key:string] : string} = {}

for (let key in arrStore.actions) {
	actionNames[key] = key
}

arrStore.actionNames = actionNames

export default arrStore