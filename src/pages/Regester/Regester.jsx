import Navbar from "./../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Regester = () => {
  return (
    <div>
      <Navbar bg={"bg-[#f3f3f3]"} />
      <div className="hero min-h-screen bg-[#f3f3f3] container-fluid pt-12">
        <div className="w-full px-4">
          <div className="max-w-xl bg-base-100 mx-auto p-12">
            <h1 className="text-2xl font-bold text-center mb-8">
              Register your account
            </h1>
            <hr />
            <form className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Your Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Photo URL</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo url"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Email</strong>
                </label>
                <input
                  type="email"
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
                  placeholder="Password"
                  className="focus:outline-none w-full input rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div className="flex items-center gap-1 mt-6">
                  <input type="checkbox" id='terms-contition' className="checkbox checkbox-sm rounded" /> 
                <label htmlFor="terms-contition" className="cursor-pointer">
                  <span>Accept Term & Conditions</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
