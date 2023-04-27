/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/AuthProvider";

const Header = () => {
  const { users, logOut } = useContext(userContext);
  const handlerLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });
  };

  return (
    <div className="navbar bg-base-100 my-container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/sign-up" className="justify-between">
                Sign up
              </Link>
            </li>
            <li>
              <Link to="/">Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Firebase context
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/sign-up">sign up</Link>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {users ? (
          <>
            <span className="font-medium">{users.email}</span>
            <button onClick={handlerLogOut} className="btn" type="button">
              Sign out
            </button>
          </>
        ) : (
          <span className="font-bold btn">
            <Link to="/login">login</Link>
          </span>
        )}
        <Link to="/" className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Header;
