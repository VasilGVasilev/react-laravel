import { Link } from "react-router-dom";

const Signup = () => {
  const onSubmit = (ev) => {
    ev.preventDefault();
}
return (
    <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <form onSubmit={onSubmit}>
                <h1 className="title">Sign up for free</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="btn btn-block">Signup</button>
                <p className="message">
                    Already registered? <Link to={"/login"}>Sign in</Link>
                </p>
            </form>
        </div>
    </div>
)
}

export default Signup
