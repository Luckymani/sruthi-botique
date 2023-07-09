import React, { useState } from "react";
import "../css/loginStyles.css";
import { validateUsername, validateEmail, validatePassword } from "../../Functions folder/validation";

function RegisterPage() {
	const [registrationDeatils, setRegistrationDeatils] = useState({ username: "", email: "", password: "" });
	const [validation, setValidation] = useState({ usernameVal: true, emailVal: true, passwordVal: true });

	function handleChange(e) {
		setRegistrationDeatils({ ...registrationDeatils, [e.target.name]: e.target.value });

		switch (e.target.name) {
			case "username":
				return setValidation({ ...validation, usernameVal: validateUsername(e.target.value) });
			case "email":
				return setValidation({ ...validation, emailVal: validateEmail(e.target.value) });
			case "password":
				return setValidation({ ...validation, passwordVal: validatePassword(e.target.value) });
			default:
				return null;
		}
	}
	console.log(registrationDeatils);
	console.log(validation);
	return (
		<div id="wrapper">
			{/* <div id="logo">
				<img src="" alt="logo"></img>
			</div> */}

			<div id="card">
				<div id="title">
					<p>Sign up</p>
				</div>
				<div>
					<form method="" action="">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" name="username" autoComplete="off" placeholder="username" onChange={handleChange}></input>

						<label htmlFor="email">E-mail</label>
						<input type="text" id="email" name="email" placeholder="email" onChange={handleChange}></input>

						<label htmlFor="password">Password</label>
						<input type="text" id="password" name="password" placeholder="password" onChange={handleChange}></input>
					</form>
				</div>
				<div id="card_footer">
					<button id="lgn_btn">Create Account</button>
					<p>
						already have an account?{" "}
						<a href="#">
							{" "}
							<b>Login</b>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
