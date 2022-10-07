import React from 'react'
import { useState } from "react"
export default function UpdateProfile() {

	let user = JSON.parse(sessionStorage.getItem('userlogin'))


	const [userProfile, setUserProfile] = useState('')
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	if(user!==null)
  {

	return (
        <div>
			<body>
				<section class="ftco-section">
					<div class="container-fluid">
						<div class="row justify-content-center">
							<div class="col-md-8 col-lg-8">
								<div class="wrap d-md-flex">
									<div class="img" style={{ 'background-image': 'url(assets/img/profile.png)' }}>
									</div>
									
									<div class="login-wrap p-4 p-md-5">
										<div class="d-flex">
											<div class="w-80 ">
												<h3 class="mb-4"><u>Update Profile</u></h3>
											</div>
											<div class="w-80">
												<p class="social-media d-flex justify-content-end">
												</p>
											</div>
										</div>

{/*
										<section id="update" class="d-flex align-items-center">
										<div class="d-flex align-items-center">
      <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-12">

            <div class="btns">
              <a href="/signup" class="btn-menu animated fadeInUp scrollto">Change Profile Photo</a>
			  <br />
			  <br />
              <a href="/signup" class="btn-book animated fadeInUp scrollto">Change Username</a>
			  <br />
			  <br />
              <a href="/password" class="btn-book animated fadeInUp scrollto">Reset Password</a>
           
            </div>
          </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200"></div>
        </div>
      </div>
    </div>
	</section>
	*/}

										
										<div class="form-group mb-3">
										<label class="label" style={{ 'padding-top': '18px', 'height': '55px' }}></label>
                                            <button type="submit"
                                        	    class="form-control btn btn-primary rounded submit px-3">Change Profile Photo</button>
                                    	</div>
										
										<div class="form-group mb-3">
										<label class="label" style={{ 'padding-top': '18px', 'height': '55px' }}></label>
											<button type="submit"
												class="form-control btn btn-primary rounded submit px-3">Change Username</button>
										</div>

                                        <div class="form-group mb-3">
										<label class="label" style={{ 'padding-top': '18px', 'height': '55px' }}></label>
                                            <button type="submit"
                                        	    class="form-control btn btn-primary rounded submit px-3">Reset Password</button>
                                    	</div>
										
										<div class="form-group mb-3">
											<label class="label" style={{ 'padding-top': '18px', 'height': '55px' }}></label>
											<button type="submit"
												class="form-control btn btn-primary rounded submit px-3">Update</button>
										</div>
	

										<p class="text-right"><u><a href="/dashboard">Back<i class="bi bi-arrow-left-square-fill"></i></a></u></p>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</section>
			</body>
		</div>
	)
}
}
