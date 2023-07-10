import React, { useState } from "react";
import "../css/loginStyles.css";
import { validateUsername, validateEmail, validatePassword } from "../../Functions folder/validation";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function RegisterPage() {
	const [registrationDeatils, setRegistrationDeatils] = useState({ username: "", email: "", password: "" });
	const [validation, setValidation] = useState({ usernameVal: true, emailVal: true, passwordVal: true });
	const [user, setuser] = useState();

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

	// google-singup-code
	const responseMessage = (response) => {
		const token = response.credential;
		setuser(jwt_decode(token));

		console.log(user);
	};
	const errorMessage = (error) => {
		console.log(error);
	};

	const google_signup = document.getElementsByClassName("nsm7Bb-HzV7m-LgbsSe-BPrWId")[0];
	if (google_signup != undefined) {
		google_signup.textContent = "Sign up with Google";
	}

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
					<form method="" action="" id="register_form">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" name="username" autoComplete="off" placeholder="username" onChange={handleChange}></input>
						{!validation.usernameVal && registrationDeatils.username && <div class="error_msg">Username must be atleast 6 characters long, and can contain letter, numbers, underscore.</div>}
						<label htmlFor="email">E-mail</label>
						<input type="text" id="email" name="email" placeholder="email" autoComplete="off" onChange={handleChange}></input>
						{!validation.emailVal && registrationDeatils.email && <div class="error_msg">Invalid email</div>}
						<label htmlFor="password">Password</label>
						<input type="text" id="password" name="password" placeholder="password" onChange={handleChange}></input>
						{!validation.passwordVal && registrationDeatils.password && <div class="error_msg">Password must be atleast 8 characters long and must contain atleast one uppercase and special character and one number. </div>}
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
					<div className="google_login">
						<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
