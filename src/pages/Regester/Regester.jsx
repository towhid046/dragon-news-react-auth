import { useContext } from "react";
import Navbar from "./../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/ContextProvider/ContextProvider";
import { toast } from "react-toastify";

const Regester = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const userName = form.get("name");
    const imgUrl = form.get("photoUrl");

    // create User
    createUser(email, password)
      .then(() => {
        toast.success("Your account created succfully");
        updateUserProfile(userName, imgUrl)
          .then((result) => {})
          .catch((error) => console.error(error));
      })
      .catch((err) => {
        console.error(err);
      });

    // update user
  };

  return (
    <div>
      <Navbar bg={"bg-[#f3f3f3]"} />
      <div className="hero min-h-screen bg-[#f3f3f3] container-fluid py-12">
        <div className="w-full px-4">
          <div className="max-w-xl bg-base-100 mx-auto p-12">
            <h1 className="text-2xl font-bold text-center mb-8">
              Register your account
            </h1>
            <hr />
            <form onSubmit={handleRegisterForm} className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Your Name</strong>
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="photoUrl"
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
                  name="email"
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
                  name="password"
                  placeholder="Password"
                  className="focus:outline-none w-full input rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div className="flex items-center gap-1 mt-6">
                <input
                  type="checkbox"
                  id="terms-contition"
                  className="checkbox checkbox-sm rounded"
                />
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
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className=" cursor-pointer text-red-400 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
