import { useContext } from "react";
import Navbar from "./../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/ContextProvider/ContextProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // create User
    loginUser(email, password)
      .then(() => {
        toast.success("Log in successfull");
        e.target.reset()
      })
      .catch((err) => {
        toast.error('Something went wrong');
      });
  };

  return (
    <div>
      <Navbar bg={"bg-[#f3f3f3]"} />
      <div className="hero min-h-screen bg-[#f3f3f3] container-fluid pt-12">
        <div className="w-full px-4">
          <div className="max-w-xl bg-base-100 mx-auto p-12">
            <h1 className="text-2xl font-bold text-center mb-8">
              Login your account
            </h1>
            <hr />
            <form onSubmit={handleLoginForm} className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Email address</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Password</strong>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="focus:outline-none w-full input rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
                  Log in
                </button>
              </div>
            </form>
            <p className="text-center mt-5">
              Don't have an account?{" "}
              <Link
                to={"/regester"}
                className=" cursor-pointer text-red-400 font-semibold"
              >
                Regester
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
