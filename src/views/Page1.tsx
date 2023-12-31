import { useSelector, useDispatch } from "react-redux"
import handleNum from "@/store/NumStatus/index.ts"

const Page1 = () => {
	// handle number
	const {num, arr} = useSelector((state: RootState) => ({
		num: state.handleNum.num,
		arr: state.handleArr.arr
	}))

	const dispatch = useDispatch()

	const plusOne = () => {
		dispatch({type: "plusOne",})
	}

	const asyncPlusTwo = () => {
		dispatch(handleNum.asynActions.asyncPlusTwo)
	}

	const arrPush = () => {
		dispatch({type: "arrPush", value:2})
	}


	return (
		<div>
			<p>{num}</p>
			<button onClick={plusOne}>Plus one</button>
			<button onClick={asyncPlusTwo}>Async Plus two</button>
			<p>{arr}</p>
			<button onClick={arrPush}>Plus two</button>
		</div>
	)
}

export default Page1