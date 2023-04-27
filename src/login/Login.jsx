import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../providers/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signInUser, googleSignIn } = useContext(userContext);

  const handlerLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
        // const logUser = userLogin.user;
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handlerGoogleSign = () => {
    googleSignIn()
      .then(() => {})
      .catch(() => {});
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero mt-20 ">
      <div className="hero-content  flex-col w-full  lg:w-5/6 ">
        <div className="text-center ">
          <h1 className="text-2xl lg:text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card border flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlerLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
            </div>

            <div className="mt-4">
              <button type="button" onClick={handlerShowPassword} className={`cursor-pointer  ${showPassword ? "text-[#1a73e8] font-bold" : "text-black"}  `}>
                Show Password
              </button>
            </div>

            <div className="flex justify-between items-center">
              <label className="label">
                <span className="label-text-alt link link-hover">Forgot password?</span>
              </label>
              <label>
                New member ?
                <span>
                  <Link to="/sign-up" className="label-text-alt link link-hover text-blue-500  ml-2 ">
                    Register here
                  </Link>
                </span>
              </label>
            </div>
            <p className="text-red-600 font-medium">{error}</p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="form-control mt-2">
              <button onClick={handlerGoogleSign} type="button" className="btn border-0  bg-[#d34836] hover:bg-[#d34836]">
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
