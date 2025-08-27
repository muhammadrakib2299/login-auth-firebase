import { Link } from "react-router";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero bg-base-200 py-10">
      <div className="w-full max-w-sm mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Login now!</h1>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleLogin} className="card-body w-full">
            <fieldset className="fieldset w-full">
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
              <div className="mt-2">
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 w-full">Login</button>
            </fieldset>
          </form>
          <p className="pb-8 text-center">
            New to this website? Please{" "}
            <Link className="text-green-700" to="/registration">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
