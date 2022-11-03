import { useState } from "react";

const useInput = (valueValidation) => {
	const [inputValue, setInputValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	let isValid = valueValidation(inputValue);

	const hasErrors = isTouched && !isValid;

	const inputChangeHandler = (event) => {
		setInputValue(event.target.value);
	};

	const inputBlurHandler = (event) => {
		setIsTouched(true);
	};

	const reset = () => {
		setInputValue("");
		setIsTouched(false);
	};

	return {
		inputValue,
		isValid,
		hasErrors,
		inputChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
