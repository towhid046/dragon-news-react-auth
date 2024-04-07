import userLogo from '../../../assets/images/user.png'
import { Link } from 'react-router-dom';
const Navbar = ({bg = 'bg-white'}) => {
  const links = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Career</a>
      </li>
    </>
  );
  return (
    <nav className={`${bg}`}>
      <div className={`navbar ${bg} container mx-auto  px-1`}>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {links}
            </ul>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
            <a>
                <img className='w-10 rounded-full cursor-pointer' src={userLogo} alt="" />
            </a>
          <Link to={'/login'} className="btn hover:bg-black rounded-none w-36 text-white bg-[#403f3f]">Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
