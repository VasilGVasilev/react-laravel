import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider.hook";

const Signup = () => {

    const {setToken, setUser} = useStateContext();
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('passwordConfirmed')


        }

        axiosClient.post('/signup', payload)
            .then(({data})=>{
                setToken(data.token); //when token state is updated, we go back to the logic in GuestLayout if token -> navigate to '/' -> no redirect to /login; redirect to /users but within defaultLayout by the power of router.js 'navigate to'
                setUser(data.user); 
            })
            .catch(err=>{
                const response = err.response;
                if (response && response.status === 422){ //422 validation error, thus, coming from the server
                    console.log(response.data.errors);
                }
            })
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login into your account</h1>
                    <input name="name" placeholder="Full Name"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="passwordConfirmed" placeholder="Password Confirmation"/>
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
