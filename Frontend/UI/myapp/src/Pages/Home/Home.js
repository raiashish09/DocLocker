import React from 'react'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div
    style={{
      backgroundImage: "url(assets/img/lock.png)",
      left: 0,
      right: 0,
      position: "absolute",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    }}
    >
    

    {/*---------------HEADER-----------------*/}
<Navbar></Navbar>
{/*
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
          <li class="dropdown"><a href="#"><span>Login</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="login/index.html">Admin</a></li>
              <li><a href="/signup">User</a></li>
            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>  

    </div>
  </header>
  */}

   {/*---------------TEMPLATE-----------------*/}
 <section id="hero" class="hero">
    {/* <section id="hero" class="d-flex align-items-center">*/}
   
    <div class="d-flex align-items-center">
      <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-12">
          <br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Welcome to <span>DocLocker !!</span></h1>
            <br />
            <h2>Secure your documents!!</h2>
            <div class="btns">
              <a href="/signup" class="btn-menu animated fadeInUp scrollto">SignUp</a>
              <a href="/signin" class="btn-book animated fadeInUp scrollto">SignIn</a>
           
            </div>
          </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200"></div>
        </div>
      </div>
    </div>
    </section>
    


    {/*---------------About-us-----------------*/}

    <section id="about" class="faq section-bg" style={{"backgroundColor":"white"}}>
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h1>About Us</h1>
        </div>

        <p> &nbsp;Doc locker provides a service to access authentic documents/certificates like PAN Card, passport, 
        mark sheets and degree certificates in digital format which eliminates the use of physical documents. 
        Doc Locker provides an online platform for personal storage space in the cloud. Users can also manage and 
        securely store the copies of legacy documents in Doc Locker. Doc locker services enable users to upload 
        their own content or provide synchronization software with other people using links or QR code without 
        sending large attachments. The service is intended to minimize the use of physical documents, provide 
        authenticity of the e-documents to make it easy for the third person to receive services. Documents will 
        be made available for the third person virtually where user will provide link or QR code to the third 
        person who will be able to view or download the requested document as per users accessibility.</p>
      </div>
    </section>

{/*---------------FAQ-----------------*/}


<section id="faq" class="basic h6">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div class="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" 
                data-bs-target="#faq-list-1">How to access the document? <i
                  class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse " data-bs-parent=".faq-list">
                <p>
                  Depending on your requirement ask person to give access to download or view the document accordingly.
               </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2"
                class="collapsed">How many documents can u store? <i
                  class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                <p>
                 As many as you want.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3"
                class="collapsed">Is there any file size limitation? <i
                  class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                <p>
                 No.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4"
                class="collapsed">Are documents secured? <i
                  class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                <p>
                 Yes the documents are secured. Only authrized persons can view or download the document.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5"
                class="collapsed">What file extensions are allowed? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                <p>
                 All files can be uploaded here.
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  </div>
  )
}

export default Home