import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import './Signin.css';

const Login = ({setUserId}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fieldErrors, setError] = useState(false);

    const onLogin = (e) => {
        e.preventDefault();
        if (email == '' || password == '') {
            setError(true);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                setUserId(user.uid);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (

        <>
            <div className="app" >
                <div className="login" >
                    <h1>Sign In</h1>
                    <div className="container" >
                        <div className="top" >
                            <i class="fab fa-google"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-apple"></i>
                        </div>
                        {
                            fieldErrors && <h3 className="error"> Please fill out the form correctly!</h3>
                        }
                        <form>
                            <label>E-mail</label>
                            <input id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)} />
                            <label>Password</label>
                            <input id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <div className="remember" >
                                <input id='checkbox' type='checkbox' checked='checked' />
                                <label for='checkbox' >
                                    <p>Remember Me</p>
                                </label>
                            </div>
                            <button onClick={onLogin} >Log In</button>
                        </form>
                        <div className="bottom" >
                            <p>Forgot your password?</p>
                            <a href="/" >Reset Password</a>
                        </div>
                        <NavLink className="create" to="/signup">
                            Create Account
                        </NavLink>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login