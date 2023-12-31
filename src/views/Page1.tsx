import { useSelector, useDispatch } from "react-redux"

const Page1 = () => {
	// handle number
	const {num} = useSelector((state: RootState) => ({
		num: state.handleNum.num
	}))
	const {arr} = useSelector((state: RootState) => ({
		arr: state.handleArr.arr
	}))

	const dispatch = useDispatch()

	const plusOne = () => {
		dispatch({type: "plusOne",})
	}

	const plusTwo = () => {
		dispatch({type: "plusTwo", value:2})
	}

	const arrPush = () => {
		dispatch({type: "arrPush", value:2})
	}


	return (
		<div>
			<p>{num}</p>
			<button onClick={plusOne}>Plus one</button>
			<button onClick={plusTwo}>Plus two</button>
			<p>{arr}</p>
			<button onClick={arrPush}>Plus two</button>
		</div>
	)
}

export default Page1