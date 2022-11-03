import { useReducer } from "react";

const initialInputState = {
	value: "",
	isTouched: false,
};

const inputStateReducer = (state, action) => {
	if (action.type === "INPUT") {
		return {
			value: action.value,
			isTouched: state.isTouched,
		};
	}
	if (action.type === "BLUR") {
		return { value: state.value, isTouched: true };
	}
	if (action.type === "RESET") {
		return initialInputState;
	}
	return initialInputState;
};

const useInput = (validateValue) => {
	// const [enteredValue, setEnteredValue] = useState("");
	// const [isTouched, setIsTouched] = useState(false);

	const [inputState, dispatch] = useReducer(
		inputStateReducer,
		initialInputState
	);

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = (event) => {
		dispatch({ input: "INPUT", value: event.target.value });
	};

	const inputBlurHandler = (event) => {
		dispatch({ input: "BLUR" });
	};

	const reset = () => {
		dispatch({ input: "RESET" });
	};

	return {
		value: inputState.value,
		isvalid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
