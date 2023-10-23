import React from "react";
import Navbar from "./components/Navbar";
// import Profile from "./components/home/Profile";
// import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";
import Home from "./components/home/Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
     <Link>
     <Navbar/>
      <Home/>
     </Link>
     
    </div>
  //   <Router>
      
  //   <div>
  //   <Navbar/>
  //   <Profile/>
  //     <Routes>
  //       <Route path="/home" exact component={Home} />
  //       <Route path="/profiel" exact component={Profile} />
  //     </Routes>
      
  //   </div>
  // </Router>
   
  );
}

export default App;
