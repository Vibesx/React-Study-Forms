import useInput from "../hooks/use-input";

const VALID_CLASSES = "form-control";
const INVALID_CLASSES = "form-control invalid";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isvalid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameInputReset,
	} = useInput((val) => val.trim() !== "");

	const {
		value: enteredEmail,
		isvalid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailInputReset,
	} = useInput((val) => val.includes("@"));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid) {
			return;
		}

		nameInputReset();
		emailInputReset();
	};

	const nameInputClasses = nameInputHasError
		? INVALID_CLASSES
		: VALID_CLASSES;

	const emailInputClasses = emailInputHasError
		? INVALID_CLASSES
		: VALID_CLASSES;

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className="error-text">Name must not be empty.</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className="error-text">
						Email must not be empty and must be a valid email
						address.
					</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
