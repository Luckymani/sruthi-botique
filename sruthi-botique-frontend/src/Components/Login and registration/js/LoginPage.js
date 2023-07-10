import React, { useState } from "react";
import "../css/loginStyles.css";

import useLoginWithGoogle from "../../Functions folder/useLoginWithGoogle";
import { useGoogleLogin } from "@react-oauth/google";

function LoginPage() {
	const [loginDeatils, setLoginDeatils] = useState({});
	const { profileData, onSuccess, onError } = useLoginWithGoogle();

	//?to handle google authentication
	const login = useGoogleLogin({ onSuccess, onError });
	console.log(profileData);

	//?handle input change
	function handleChange(e) {
		setLoginDeatils({ ...loginDeatils, [e.target.name]: e.target.value });
	}

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
					<form method="" action="">
						<label htmlFor="username">E-mail</label>
						<input type="text" id="email" name="email" autoComplete="off" placeholder="email" onChange={handleChange}></input>
						<label htmlFor="password">Password</label>
						<input type="text" id="password" name="password" placeholder="password" onChange={handleChange}></input>
					</form>
				</div>
				<div id="card_footer">
					<p>
						<a href="">forgot password?</a>
					</p>
					<button id="lgn_btn">Log in</button>
					<p>
						don’t have an account?{" "}
						<a href="#">
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
