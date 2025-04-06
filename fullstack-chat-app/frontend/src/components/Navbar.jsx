import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useNavigationStore } from "../store/useNavigationStore";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { previousPath, setPreviousPath } = useNavigationStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSettingsClick = () => {
    if (location.pathname === "/settings") {
      if (previousPath) {
        navigate(previousPath); // Go back if there's a previous path
      } else {
        navigate(authUser ? "/" : "/login"); // Fallback if no previous path
      }
    } else {
      setPreviousPath(location.pathname); // Save current path
      navigate("/settings");
    }
  };

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
      backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Connect</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSettingsClick}
              className="btn btn-sm gap-2 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </button>

            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm gap-2">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;





