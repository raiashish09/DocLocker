import React from 'react'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { axios } from 'axios'
import Navbar from '../Navbar/Navbar'


const Dashboard4 = () => {

 

  let user = JSON.parse(sessionStorage.getItem('userlogin'));
  console.log(user);
  let Id=user.userId;

  function createFolder ()
  {
    axios.post("http://localhost:8080/usersession/add/"+Id)
    .then(Response=>{console.log(Response)})
    .catch(error =>{console.log(error)});
  }

  if(user!==null)
  {

  return (
    
    <div
    
    style={{
      backgroundImage: "url(assets/img/img2.png)",
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

    <Navbar></Navbar>

    {/*<section id="hero" class="d-flex align-items-top">*/}
    <section id="hero" class="hero">
    <div class="d-flex align-items-top">
      <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-12">
          <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <div class="d-flex flex-column">
                <div class="profile">
                <br/><br/><br/><br/>
                    <img src="assets/img/userprofile.png" width={200} alt=""  class="img-fluid rounded-circle"/>
                        <h1 class="text-light"><a href="index.html">Hello {user.firstName}</a></h1>
                                                    {/* dummypage */}
            </div>
            <br />
            <br />
            <br />
            <h1>Welcome to <span>DocLocker</span></h1>
            <h2>How may i help you ?</h2>

            

            <div class="btns">
              <a href="http://localhost:8080/createfolder" class="btn-menu animated fadeInUp scrollto"><i class="bi bi-file-earmark-plus"  onClick={createFolder}></i> Show Folder</a>
             
              {/*<a href="/view" class="btn-book animated fadeInUp scrollto"><i class="bi bi-folder2-open"></i>  Show Folder</a>
              
              <a href="/share" class="btn-book animated fadeInUp scrollto"><i class="bi bi-share-fill"></i>  Share</a>*/}
              
              <a href="/updateprofile" class="btn-book animated fadeInUp scrollto"><i class="bi bi-person"></i>  Update Profile</a>
             
              <a href="/logout" class="btn-book animated fadeInUp scrollto"><i class="bi bi-box-arrow-left"></i>  Logout</a>

                {/*<a href="#menu" class="btn-menu animated fadeInUp scrollto">SignUp</a>
                <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">SignIn</a>*/}
           
            </div>
          </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200"></div>
        </div>
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}


}

export default Dashboard4;