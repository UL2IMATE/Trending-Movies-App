import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex flex-row  sticky top-0  z-30 items-center w-full text-white text-xl font-bold bg-gray-900 p-5">
      <div className="w-full flex  justify-start ">
        <h1 className="text-4xl font-bold text-amber-400  ">Movie App</h1>
      </div>
      <ul className="flex justify-end items-center w-full">
        <li className="mx-6 transition-all  ease-in-out hover:text-black cursor-pointer font-extralight hover:bg-gray-400 rounded-2xl px-4 py-1.5">
          <Link to="/" viewTransition>
            Home
          </Link>
        </li>
        <li className="mx-6 transition-all  ease-in-out hover:text-black cursor-pointer font-extralight hover:bg-gray-400 rounded-2xl px-4 py-1.5">
          <Link to="/favorite" viewTransition>
            Favorite
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
