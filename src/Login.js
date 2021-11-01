import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";

import "./Login.css";

function Login() {
	const signIn = (e) => {
		auth.signInWithPopup(provider).catch((error) => {
			alert(error.message);
		});
	};
	return (
		<div className="login">
			<div className="login__logo">
				<img
					// src="https://i.pinimg.com/originals/7c/a4/03/7ca403a7ce8f3a79ed24ccaa16c712e9.jpg"
					alt=""
				/>
			</div>
			<Button onClick={signIn}>Sign In</Button>
		</div>
	);
}

export default Login;
