
export default function Signup() {
    return (
            <div className="register_header">
                <h1 className="semiBold">Create Account</h1>

                <div className="registration_form">
                    <form action="/register" method="post">
                        <div className="field">
                            <label htmlFor="registration_form_firstname">First Name</label>
                            <input type="text" name="user_firstname" id="userFirstname" placeholder="First Name" />
                        </div>

                        <div className="field">
                            <label htmlFor="registration_form_lastname">Last Name</label>
                            <input type="text" name="user_lastname" id="Registration_form_userLastname" placeholder="Last Name" />
                        </div>

                        <div className="field">
                            <label htmlFor="userEmail">Email</label>
                            <input type="email" name="user_email" id="Registration_form_userEmail" placeholder="Email" />
                        </div>

                        <div className="field">
                            <label htmlFor="userPassword">Password</label>
                            <input type="password" name="user_password" id="Registration_form_userPassword" placeholder="Password" />

                        </div>


                        <button type="submit">Sign Up</button>

                    </form>
                </div>
            </div>

    );
}


