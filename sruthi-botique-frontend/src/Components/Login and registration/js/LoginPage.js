import React, { useState, useContext } from "react";
import "../css/loginStyles.css";

import useLoginWithGoogle from "../../Functions folder/useLoginWithGoogle";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { NotificationContext } from "../../../App";

function LoginPage() {
	const [loginDeatils, setLoginDeatils] = useState({ email: "", password: "" });
	const { profileData, onSuccess, onError } = useLoginWithGoogle();

	//?contexts here
	const { notificationDeatils, setNotificationDeatils } = useContext(NotificationContext);

	//?to handle google authentication
	const login = useGoogleLogin({ onSuccess, onError });

	//?handle input change
	function handleChange(e) {
		setLoginDeatils({ ...loginDeatils, [e.target.name]: e.target.value });
	}

	// working on it
	const loginHandler = async () => {
		const { email, password } = loginDeatils;
		if (email == "" && password == "") {
			setNotificationDeatils({ showNotification: true, notificationType: "warning", notificationMessage: "fill the deatils" });
			return;
		}

		try {
			await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, loginDeatils);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div id="wrapper">
			{/* <div id="logo">
				<img src="" alt="logo"></img>
			</div> */}

			<div id="card">
				<div id="title">
					<p>Sign in</p>
				</div>
				<div>
					<form id="login_form">
						<label htmlFor="email">E-mail</label>
						<input type="text" id="email" name="email" autoComplete="off" placeholder="email" onChange={handleChange} required></input>
						<label htmlFor="password">Password</label>
						<input type="text" id="password" name="password" placeholder="password" onChange={handleChange} required></input>
					</form>
				</div>
				<div id="card_footer">
					<p>
						<a href="">forgot password?</a>
					</p>
					<button id="lgn_btn" onClick={() => loginHandler()}>
						Log in
					</button>
					<p>
						don’t have an account?{" "}
						<a href="/register">
							{" "}
							<b>create account</b>
						</a>
					</p>
					<div className="google_login">
						<button onClick={() => login()}>sign in with google</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
