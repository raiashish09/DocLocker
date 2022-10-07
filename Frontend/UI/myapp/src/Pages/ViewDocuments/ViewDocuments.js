import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewDocuments() {
	return (
        <div>

         {/* ======= Header ======= */}
         <header id="header" className="header fixed-top d-flex align-items-center">
         <div className="d-flex align-items-center justify-content-between">
            {/*<i className="bi bi-list toggle-sidebar-btn" />*/}
           <a href="admin.html" className="logo d-flex align-items-center">
              {/*<img src="assets/img/admin.jpg" alt="" />*/}
             <span className="d-none d-lg-block"> &nbsp; &nbsp; DocLocker</span>
           </a>
         </div>{/* End Logo */}
         <nav className="header-nav ms-auto">
           <ul className="d-flex align-items-center">
             <li className="nav-item dropdown pe-3">
               <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  {/*<img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                 <span className="d-none d-md-block dropdown-toggle ps-2">D.D.Deshmukh</span>
               </a>{/* End Profile Iamge Icon 
               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                 <li className="dropdown-header">
                   <h6>D.D.Deshmukh</h6>
                   <span>Web Designer</span>
                 </li>
                 <li>
                   <hr className="dropdown-divider" />
                 </li>
                 <li>
                   <hr className="dropdown-divider" />
                 </li>
                 <li>
                   <a className="dropdown-item d-flex align-items-center" href="#">
                     <i className="bi bi-box-arrow-right" />
                     <span>Sign Out</span>
                   </a>
                 </li>
               </ul>{/* End Profile Dropdown Items */}
               </a>
             </li>{/* End Profile Nav */}
           </ul>
         </nav>{/* End Icons Navigation */}
       </header>{/* End Header */}


       <main id="main" className="main">
       <div className="pagetitle">
         <h1>Documents</h1>
         <nav>
           <ol className="breadcrumb">
             <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
             <li className="breadcrumb-item active"><a href="active.html">Documents</a></li>
           </ol>
         </nav>
         </div>
         </main>

        </div>
        )
    }
    