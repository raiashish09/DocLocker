import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Signin1 from './Pages/SignIn/Signin1';
import Signup2 from './Pages/SignUp/Signup2';
import ResetPassword from './Pages/ResetPassword/ResetPassword'
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile'
import Dashboard4 from './Pages/Dashboard/Dashboard4';
import Share from './Pages/Share/Share';
import ViewDocuments from './Pages/ViewDocuments/ViewDocuments';
import Logout from './Pages/Logout/Logout';
import Backtohome from './Pages/BackToHome/Backtohome';
/*import Admin from './Pages/Admin/Admin';*/

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<Signin1 />} />
          <Route path="/signup" element={<Signup2 />} />
          <Route path="/password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard4 />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/share" element={<Share />} />
          {/*<Route path="/admin" element={<Admin />} />*/}
          <Route path="/view" element={<ViewDocuments />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/back" element={<Backtohome />} />
          
        </Routes>
      </BrowserRouter>

  );
<div>
  <Home></Home>
  </div>

}

export default App;






