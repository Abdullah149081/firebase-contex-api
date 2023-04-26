import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlerShowPassword = () => {
  setShowPassword(!showPassword);
  };

  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col w-full  lg:w-5/6 ">
        <div className="text-center ">
          <h1 className="text-2xl lg:text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" />
            </div>

            <div className="mt-4">
              <button type="button" onClick={handlerShowPassword} className={`cursor-pointer  ${showPassword ? 'text-[#1a73e8] font-bold' : 'text-black'}  `}>
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
            <p className="text-red-600 font-medium" />
            <div className="form-control mt-6">
              <button type="button" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
