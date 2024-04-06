import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');




    const [fieldErrors, setError] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        if (email == '' || password == '' || password != confirmPassword) {
            setError(true);
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }

    return (
        <div className="app"  >
            <div className="login" >
                <h1>Create Account</h1>
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
                    <label>Name</label>
                        <input type="text"
                            label="Name"
                            value={email}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Name" />
                        <label>E-mail</label>
                        <input type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email address" />
                        <label>Password</label>
                        <input id="password"
                            type="password"
                            label="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password" />
                        <label>Confirm Password</label>
                        <input id="password"
                            type="password"
                            label="Confirm password"
                            value={password}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm Password" />
                        <label>Gender</label>
                        <select id="cars" name="gender" onChange={(e) => setGender(e.target.value)} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <label>Age</label>
                        <input type="number"
                            label="Age"
                            value={email}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            placeholder="Age" />
                        <div className="remember" >
                            <input id='checkbox' type='checkbox' checked='checked' />
                            <label for='checkbox' >
                                <p>Remember Me</p>
                            </label>
                        </div>
                        <button type="submit"
                            onClick={onSubmit}   >Create Account</button>
                    </form>

                    <NavLink className="create" to="/">
                        Already have an acount? Sign In
                    </NavLink>
                </div>

            </div>
        </div>


    )
}

export default Signup