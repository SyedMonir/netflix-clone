import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);


    return (
        <div className='loginScreen'>
            <div className="loginScreen_background">
                <img
                    className='loginScreen_logo'
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Logo"
                />
                <button
                    className="loginScreen_Button"
                    onClick={() => setSignIn(true)} >
                    Sign In
                </button>

                <div className="loginScreen_Gradient"></div>
                {/* Eta korar karon img ta piche dekhe ase kono content na thakai */}

            </div>

            <div className="loginScreen_body">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere, Cancel at any time.</h2>
                        <h3>Ready to watch <strong>theSyed's work?</strong>  Enter your email to create or login your account.</h3>

                        <div className="loginScreen_input">
                            <form action="">
                                <input type="email" placeholder='Email Address' />
                            </form>

                            <button
                                className='loginScreen_getStarted'
                                onClick={() => setSignIn(true)} >
                                GET STARTED</button>
                        </div>
                    </>
                )
                }

            </div >
        </div >
    );
};

export default LoginScreen;