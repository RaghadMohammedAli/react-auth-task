import './Login.css';
const LogInPage = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <p className="mainP">Login to access your travelwise account</p>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john.doe@gmail.com"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>

                    <div className="login-options">
                        <label htmlFor="check">
                            <input type="checkbox" id="check"/>
                            Remember me
                        </label>
                        <a href="#">Forgot Password</a>
                    </div>

                    <button type="submit" className="btn">Login</button>
                </form>

                <div className="signUp-option">
                    <p>Don't have an account?</p>
                    <a href="#">Sign Up</a>
                </div>

                <div className="other-login-option">
                    <p>Or login with</p>
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

export default LogInPage;