import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, removeToken, getUserRole } from "../utils/auth";
import { HomeIcon, UserIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = isAuthenticated();
  const isAdmin = getUserRole() === "admin";

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BriefcaseIcon className="h-8 w-8" />
            <span className="text-xl font-bold">SkillSync</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>

            {isAuth ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
                >
                  <UserIcon className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
                  aria-label="Profile"
                  tabIndex={0}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Profile</span>
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
                  >
                    <span>Admin Panel</span>
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-blue-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 