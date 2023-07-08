import React from "react";
import '../Cssfolder/loginStyles.css'

function LoginPage() {
	return (
		<div id="wrapper">
			<div id='logo'>
				<img src=''></img>
			</div>
			
			<div id='card' >
				<div id='title'>
					<p>Sign in</p>
				</div>
				<div>
					<form method="" action="">
						<label for='username'>Username</label>
						<input type="text" id="username" name="username" autocomplete='off' placeholder='username'></input>
						<label for='password'>Password</label>
						<input type="text" id="password" name="password" placeholder='password'></input>
					</form>
				</div>
				<div id='card_footer'>
					<p><a href=''>forgot password?</a></p>
					<button id='lgn_btn'>Log in</button>
					<p>don’t have an account? <a href=''> <b>create account</b></a></p>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;

