import Navbar from "./../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar bg={"bg-[#f3f3f3]"} />
      <div className="hero min-h-screen bg-[#f3f3f3] container-fluid">
        <div className="hero-content">
          <div className=" w-full p-12  bg-base-100">
            <h1 className="text-2xl font-bold text-center mb-8">
              Login your account
            </h1>
            <hr />
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-[#f3f3f3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-[#f3f3f3]"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
