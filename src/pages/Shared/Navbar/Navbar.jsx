import userLogo from '../../../assets/images/user.png'
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
const Navbar = ({bg = 'bg-white'}) => {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/career'}>Career</NavLink>
      </li>
    </>
  );
  return (
    <nav className={`${bg} sticky top-0 z-50`}>
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
              className="menu menu-sm dropdown-content  gap-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {links}
            </ul>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
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

Navbar.propTypes = {
  bg: PropTypes.string
}
export default Navbar;
