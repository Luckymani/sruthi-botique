import React, { useState } from "react";
import "../css/loginStyles.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'


function LoginPage() {
	const [loginDeatils, setLoginDeatils] = useState({});
	function handleChange(e) {
		setLoginDeatils({ ...loginDeatils, [e.target.name]: e.target.value });
	}
	console.log(loginDeatils);

	// google-singup-code
	const responseMessage = (response) => {
        const token = response.credential
		const user = jwt_decode(token)
		console.log(user)
    };
    const errorMessage = (error) => {
        console.log(error);
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
						<GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
