import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "bootstrap";
import { useAuth } from "../context/AuthContext";
import HeaderDashed from "./HeaderDashed";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const [username, setusername] = useState("");

  const [showBorder, setShowBorder] = useState(true);
  const [showSearchIcon, setSearchIcon] = useState(false);
  // const {setActiveSearch} = useContext(ShopContext);

  const { user, logout } = useAuth(); // Access user and logout from context

  const path = window.location.pathname;
  // useEffect(() => {
  // 	localStorage.setItem('activeSearch', activeSearch);
  // 	// console.log(localStorage.getItem('activeSearch'));
  // }, [activeSearch])

  useEffect(() => {
    setShowBorder(path !== "/");
    setSearchIcon(path === "/collection");
  }, [path]);

  // //  Effect to retrieve username from localStorage when the component mounts
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   console.log(user);
  //   if (user) {
  //     setusername(user.username); // Set the username from localStorage
  //   }
  // }, []);

  const handleLogout = () => {
    logout(); // Clear user data from the context
    localStorage.removeItem("user"); // clear user data from local storage
    window.location.reload(); // Reload the page to reflect the changes
  };

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );

    // Cleanup tooltips on component unmount
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
    <nav className="py-3" style={{ backgroundColor: "#e3dcd5" }}>
      <div
        className={`container position-relative  d-flex justify-content-between align-items-center flex-column ${
          showBorder ? "showLine" : ""
        }`}
      >
        <main className="col-12 d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link to="/" className="logo text-decoration-none text-dark">
            <h3 className="fs-5 mb-0">
              Comfy<span className="fw-medium c-pink">Haven</span>
            </h3>
          </Link>

          {/* Mobile Menu */}
          <ul
            style={{ backgroundColor: "#e3dcd5" }}
            className={`position-fixed p-0 top-0 end-0 z-1 d-flex flex-column ${
              showMenu ? "show" : ""
            }`}
          >
            <li
              onClick={() => setShowMenu((prev) => !prev)}
              className="backMenu p-1 py-2 d-flex fs-5 fw-bold c-light-gray align-items-center border-bottom cursor"
            >
              <i className="bx bx-chevron-left fs-big c-light-gray"></i> Back
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu((prev) => !prev)}
                className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu((prev) => !prev)}
                className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
                to="/collection"
              >
                COLLECTION
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu((prev) => !prev)}
                className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu((prev) => !prev)}
                className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu((prev) => !prev)}
                className="admin-panel-btn btn  rounded-pill mt-3 text-decoration-none c-gray p-3 py-2 d-block border-gray"
                to="/admin-panel"
              >
                ADMIN PANEL
              </NavLink>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="right d-flex align-items-center gap-1 gap-sm-3">
            <div className="icons d-flex gap-1 gap-sm-3">
              {showSearchIcon && (
                <i
                  className="bx bx-search-alt-2 fs-little-big c-gray cursor mt-2"
                  onClick={() => setActiveSearch(true)}
                ></i>
              )}

              <div className="right d-flex align-items-center gap-2 mt-2">
                {/* HeaderDashed with Username */}
                <HeaderDashed
                  username={user?.username || "Guest"} // Pass the username
                  classStyle="custom-welcome-style" // Add any required custom styling
                />
              </div>

              <NavLink
                className="login-link text-deoration-none mt-2"
                to="/login"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Login"
              >
                <i className="bx bx-user fs-little-big c-gray cursor"></i>
              </NavLink>

              {user && (
                <button
                  onClick={handleLogout}
                  class="group flex items-center justify-start w-11 h-11 bg-red-400 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                >
                  <div class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div class="absolute right-5 transform translate-x-full opacity-5 text-['#000000'] text-medium font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Logout
                  </div>
                </button>
              )}

              <button className="bg-transparent border-0 position-relative">
                <i className="bx bx-shopping-bag fs-little-big c-gray cursor"></i>
                <span className="bg-black d-block rounded-circle cart-icon c-white">
                  0
                </span>
              </button>
            </div>
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="px-0 toggleBtn bg-transparent border-0"
              role="button"
            >
              <i className="bx bx-menu-alt-right fs-big c-gray"></i>
            </button>
          </div>
        </main>
      </div>
    </nav>
  );
};

export default Navbar;
