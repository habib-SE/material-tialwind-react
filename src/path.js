import Profile from "./components/home/Profile";
import Navbar from "./components/Navbar";
export const routes = [
    
    {
      path: "/profile",
      element: <Profile />,
    },
    
    {
      path: "/",
      element: <Navbar />,
    }
  ];