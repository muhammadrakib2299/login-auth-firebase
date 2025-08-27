import React from "react";
import { Link } from "react-router";

function Registration() {
  const handleRegister = (e) => {
    e.preventDefault();
    const fullname = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(fullname, email, password);
  };

  return (
    <div className="hero bg-base-200 py-10">
      <div className="w-full max-w-sm mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          Welcome
          <br /> Please Register
        </h1>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleRegister} className="card-body w-full">
            <fieldset className="fieldset w-full">
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Full Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4 w-full">Register</button>
            </fieldset>
          </form>
          <p className="pb-8 text-center">
            Already have an account ?Please{" "}
            <Link className="text-green-700" to="/login">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
