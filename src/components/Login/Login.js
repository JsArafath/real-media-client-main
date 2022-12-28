import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UsersContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const {login, googleSignUp} = useContext(AuthContext);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogIn = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    login(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        toast.success('LogIn Successful');
        navigate(from, {replace: true});
      })
      .catch(error =>{
        console.log(error);
        setError(error.message);
      })
  }

  const handleEmail = event =>{
    setEmail(event.target.value);
  }

  const handleGoogleSingUp = () =>{
    googleSignUp(email)
      .then(result =>{
        const user = result.user;
        console.log(user);
        toast.success('Google SignUp success');
        navigate('/');
      })
      .catch(error =>{
        console.log(error);
        setError(error.message);
      })
  }

  return (
    <div className="container">
      <div className="login-section">
        <h3 className="text-4xl mb-5 text-center text-lime-500 font-bold">
          Please Login
        </h3>
        <form onSubmit={handleLogIn}>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              required
              className="input input-bordered w-full"
              name="email"
              onChange={handleEmail}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="*********"
              className="input input-bordered w-full"
              name="password"
            />
          </div>
          <p className="text-red-500 py-3">{error}</p>
          <input type="submit" value="Login" className="w-full mt-5 btn btn-wide" />
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider text-white">OR</div>
        </div>
        <div onClick={handleGoogleSingUp} className="bg-white md:w-4/5 w-full mx-auto py-3 cursor-pointer rounded-3xl">
          <p className="text-center text-xl flex justify-center pl-4">
            Sign In With Google
          </p>
        </div>
        <p className="text-white pt-4 text-center md:text-xl">
          Don't have any account{" "}
          <Link className="text-green-700" to="/signup">
            SignUp
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
