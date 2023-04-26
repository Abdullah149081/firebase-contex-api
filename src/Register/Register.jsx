import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col w-full  lg:w-5/6 ">
        <div className="text-center ">
          <h1 className="text-2xl lg:text-5xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="text" placeholder="Type your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
              <div className="mt-4">
                <span onClick={handlerShowPassword} className={`cursor-pointer  ${showPassword ? "text-[#1a73e8] font-bold" : "text-black"}  `}>
                  Show Password
                </span>
              </div>

              <label className="mt-4 text-lg ">
                Already account ?
                <span>
                  <Link to="/login" className="label-text-alt link link-hover text-blue-500 text-base ml-2 ">
                    Login here.
                  </Link>
                </span>
              </label>
            </div>
            <p className="text-red-600 font-medium"></p>

            <div className="form-control mt-6">
              <button className="btn btn-primary">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
