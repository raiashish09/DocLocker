import React from "react";

const Navbar = () => {
  return <div>
  
  <header id="header" class="d-flex align-items-center fixed-top">
  <div class="container d-flex align-items-center"><img src="assets/img/Logo.png" alt="" width="50" height="200"
      class="img-fluid"/>

    <h1 class="logo me-auto"><a href="index.html">&nbsp; DocLocker</a></h1>
   
    <a href="index.html" class="logo me-auto"></a>

    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a class="nav-link scrollto" href="#about">About</a></li>
        <li><a class="nav-link scrollto" href="#faq">F.A.Q.</a></li>
        {/*<li class="dropdown"><a href="#"><span>Login</span> <i class="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="login/index.html">Admin</a></li>
            <li><a href="/signup">User</a></li>
          </ul>
        </li>*/}
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>  

  </div>
</header>
  </div>;
};

export default Navbar;
