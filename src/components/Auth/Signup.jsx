import './Login.css';
const SignUpPage = () => {
    return (
        <div className="signUp-page">
            <div className="signUp-container">
                <h1>Sign up</h1>
                <p className="mainP">Let's get you all set up so you can access your personal account.</p>
                <form>
                    <div className="signUp-input">
                        <div className="signUpInput-group">
                           <label htmlFor="first-name">First Name</label>
                           <input type="text" id="first-name"/>
                         </div>

                         <div className="signUpInput-group">
                           <label htmlFor="last-name">Last Name</label>
                           <input type="text" id="last-name"/>
                         </div>
                    </div>

                    <div className="email-phone">
                        <div className="signUpInput-group">
                           <label htmlFor="email">Email</label>
                           <input type="email" id="email" placeholder="john.doe@gmail.com"/>
                        </div>

                        <div className="signUpInput-group">
                           <label htmlFor="phone-number">Phone Number</label>
                           <input type="number" id="phone-number"/>
                        </div>
                    </div>
                    

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="password"/>
                    </div>

                    <div className="agree-option">
                        <label htmlFor="check">
                            <input type="checkbox" id="check"/>
                            I agree to all the Terms and Privacy Polices.
                        </label>
                    </div>

                    <button type="submit" className="btn">Create account</button>
                </form>

                <div className="signUp-option">
                    <p>Already have an account?</p>
                    <a href="#">Login</a>
                </div>

                <div className="other-signUp-option">
                    <p>Or Sign up with</p>
                </div>

                <div className="icons">
                    <a href="#"><i className="fa-brands fa-google"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className= "fa-brands fa-apple"></i></a>
                </div>

            </div>
        </div>
    );
}

export default SignUpPage;