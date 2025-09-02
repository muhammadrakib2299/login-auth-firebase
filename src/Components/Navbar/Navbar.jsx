import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

function Navbar() {
  const { user, LogOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        alert("Logout Succesfully");
      })
      .catch((error) => {
        console.log(alert(error.massage));
      });
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar page-container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>

          <Link className="btn btn-ghost text-xl" to="/">
            Firebase
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <>
                {user.email}
                <Link onClick={handleLogOut} className="btn mx-3">
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link className="btn mx-2" to="/login">
                  login
                </Link>
                <Link className="btn mx-2" to="/registration">
                  Registration
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
