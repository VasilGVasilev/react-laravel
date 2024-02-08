import { Link } from "react-router-dom";

const Signup = () => {
    const onSubmit = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target)
        console.log(formData);
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login into your account</h1>
                    <input name="fullName" placeholder="Full Name"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" placeholder="Password Confirmation"/>
                    <button className="btn btn-block">Sign up</button>
                    <p className="message">
                        Already registered? <Link to={"/login"}>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
