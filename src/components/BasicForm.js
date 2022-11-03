import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		inputValue: firstNameInputValue,
		isValid: firstNameIsValid,
		hasErrors: firstNameHasErrors,
		inputChangeHandler: firstNameInputChangeHandler,
		inputBlurHandler: firstNameInputBlurHandler,
		reset: resetFirstName,
	} = useInput((value) => {
		return value.trim() !== "";
	});

	const {
		inputValue: lastNameInputValue,
		isValid: lastNameIsValid,
		hasErrors: lastNameHasErrors,
		inputChangeHandler: lastNameInputChangeHandler,
		inputBlurHandler: lastNameInputBlurHandler,
		reset: resetLastName,
	} = useInput((value) => {
		return value.trim() !== "";
	});

	const {
		inputValue: emailInputValue,
		isValid: emailIsValid,
		hasErrors: emailHasErrors,
		inputChangeHandler: emailInputChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmail,
	} = useInput((value) => {
		return value.includes("@");
	});

	const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

	const onFormSubmitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}

		resetFirstName();
		resetLastName();
		resetEmail();
	};

	const firstNameClasses = firstNameHasErrors
		? "form-control invalid"
		: "form-control";

	const lastNameClasses = lastNameHasErrors
		? "form-control invalid"
		: "form-control";

	const emailClasses = emailHasErrors
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={onFormSubmitHandler}>
			<div className="control-group">
				<div className={firstNameClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						value={firstNameInputValue}
						onChange={firstNameInputChangeHandler}
						onBlur={firstNameInputBlurHandler}
					/>
					{firstNameHasErrors && (
						<p className="error-text">First Name can't be empty!</p>
					)}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						value={lastNameInputValue}
						onChange={lastNameInputChangeHandler}
						onBlur={lastNameInputBlurHandler}
					/>
					{lastNameHasErrors && (
						<p className="error-text">Last Name can't be empty!</p>
					)}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					value={emailInputValue}
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
				/>
				{emailHasErrors && (
					<p className="error-text">
						Email can't be empty and must be a valid email address!
					</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
