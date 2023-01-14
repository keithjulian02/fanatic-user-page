// import { Link } from "react-router-dom";


export default function Signup() {
    return (
            <div className="recovery_header">
                <h1 className="semiBold">Recover  Account</h1>

                <div className="recovery_form">
                    <form action="/recovery" method="post">
       
                        <div className="field">
                            <label htmlFor="userEmail">Verification Email</label>
                            <input type="email" name="user_email" id="Recovery_form_userEmail" placeholder="Email" />
                        </div>



                        <button type="submit">Send</button>

                    </form>
                </div>
            </div>

    );
}
