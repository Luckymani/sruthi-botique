import React from "react";
import "../css/loginStyles.css";

function RegisterPage() {
	return (
		<div id="wrapper">
			<div id="logo">
				<img src=""></img>
			</div>

			<div id="card">
				<div id="title">
					<p>Sign up</p>
				</div>
				<div>
					<form method="" action="">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" autocomplete="off" placeholder="username"></input>

						<label for="email">E-mail</label>
						<input type="text" id="email" name="email" autocomplete="off" placeholder="email"></input>

						<label for="password">Password</label>
						<input type="text" id="password" name="password" placeholder="password"></input>
					</form>
				</div>
				<div id="card_footer">
					<button id="lgn_btn">Create Account</button>
					<p>
						already have an account?{" "}
						<a href="">
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
