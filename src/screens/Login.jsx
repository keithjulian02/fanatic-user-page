import { Link } from "react-router-dom";
import '../style/index.css'

export default function Login() {
    return (
        <div className="login_header">
            <h1 className="semiBold">Login</h1>
           
            <div className="login_form">
                <form action="/login" method="post">
                    <div className="field">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" name="user_email" id="userEmail" placeholder="Email" />
                    </div>
                    <div className="field">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" name="user_password" id="userPassword" placeholder="Password" />
                    </div>

                    <Link className="forget" to="/Recover">Forgot your password? </Link>

                    <button type="submit">Sign In</button>

                    <Link className="create" to="/Signup">Create Account</Link>
                </form>
            </div>
        </div>


    );
}
