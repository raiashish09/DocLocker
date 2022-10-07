import React from "react"; 
import './style4.css'
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 function Admin() {


  const users=[
                {sn:1,
                firstName:"ashish",
                LastName:"rai",
                Username:"user",
                	Password:"qwerty",
                  	DOB:34-78-98,	
                    Email:"asdd@gmail.com",
                    	Mobile:868968977 },


                      {sn:1,
                        firstName:"ashish",
                        LastName:"rai",
                        Username:"user",
                          Password:"qwerty",
                            DOB:34-78-98,	
                            Email:"asdd@gmail.com",
                              Mobile:868968977 }


  ]
      return (
        <div>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>DocLocker</title>
          <meta content name="description" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="my-app/assets/img/digilogo.jpg" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Google Fonts */}
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
          <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
          <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link href="assets/vendor/simple-datatables/style4.css" rel="stylesheet" />
          {/* Template Main CSS File */}
          <link href="assets/css/style4.css" rel="stylesheet" />
          {/* ======= Header ======= */}
          <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
              <i className="bi bi-list toggle-sidebar-btn" />
              <a href="admin.html" className="logo d-flex align-items-center">
                <img src="assets/img/admin.jpg" alt="" />
                <span className="d-none d-lg-block">DocLocker</span>
              </a>
            </div>{/* End Logo */}
            <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center">
                <li className="nav-item dropdown pe-3">
                  <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">D.D.Deshmukh</span>
                  </a>{/* End Profile Iamge Icon */}
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
                </li>{/* End Profile Nav */}
              </ul>
            </nav>{/* End Icons Navigation */}
          </header>{/* End Header */}
          {/* ======= Sidebar ======= */}
          <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
              <li className="nav-item">
              </li>{/* End Dashboard Nav */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="active.html">
                  <i className="bi bi-person" />
                  <span>Active Users</span>
                </a>
              </li>{/* End Documents Page Nav */}
            </ul>
          </aside>{/* End Sidebar*/}
          <main id="main" className="main">
            <div className="pagetitle">
              <h1>Active Users</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="admin.html">Home</a></li>
                  <li className="breadcrumb-item active"><a href="active.html">Active Users</a></li>
                </ol>
              </nav>
            </div>{/* End Page Title */}
            <section className="section">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                      </div>
                      {/*  <h5 class="card-title">Datatables</h5>
                <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable</p>
                  */}
                      {/* Table with stripped rows */}
                      <table className="table datatable ">
                        <thead style={{backgroundColor: '#37517e', color: 'white'}}>
                          <tr><th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Mobile Number</th>
                          </tr></thead>
                        <tbody>




                          {/* jhfjhfkfjkfjkfjkf */}

                          
                          { users.map( (user)=> (  

                                  <tr>

                            <td scope="row"> {user.sn} </td>

                            <th scope="col">{user.firstName}</th>
                            <th scope="col">{user.LastName}</th>
                            <th scope="col">{user.Username}</th>
                            <th scope="col">{user.Password}</th>
                            <th scope="col">{user.Email}</th>
                            <th scope="col">{user.DOB}</th>
                            <th scope="col">{user.Mobile}</th>
                            <td scope="col">Is Active</td>
                            <td scope="col"><a href="update_active.html" className="btn btn-primary "><i className="bi-pencil" /></a><a href="#" className="btn btn-danger"><i className="bi-trash" /></a></td>
                            
                            

                            </tr>

                          ) )

                          }
                          
           

                        </tbody>
                      </table>
                      {/* End Table with stripped rows */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer" className="footer">
            <div className="copyright">
              Â© Copyright <strong><span>DocLocker</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      );
    }
 export default Admin;