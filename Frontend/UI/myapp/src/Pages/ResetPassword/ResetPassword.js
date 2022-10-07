import React, { useEffect, useState } from 'react'
//import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Axios from 'axios'

const ResetPassword= () => {

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [confirmpass, setconfirmpass] = useState('')

	const postData = async () => {
		try{
			const res = await Axios.post(`http://localhost:8081/login`,{userName,password, confirmpass})
			if(res.data !== ""){window.location.href = "/dashboard"}
			else{window.location.href = "/"}
			}
			catch (err){
				console.log(err)
			}      
	 }
	
	 const gotoDetails = () => {
		Navigate("/details");
	 }

	//Rendering
	return (
		<div>
			<body>
				<section class="ftco-section">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-md-10 col-lg-10">
								<div class="wrap d-md-flex">
									<div class="img" style={{ 'background-image': 'url(assets/img/Password.png)'}}>
									</div>
									<div class="login-wrap p-4 p-md-5">
										<div class="d-flex">
											<div class="w-80 ">
												<h3 class="mb-4"><u>Reset Password</u></h3>
											</div>
											<div class="w-80">
												<p class="social-media d-flex justify-content-end">
												</p>
											</div>
										</div>
										<div>
										Forgot your password? No problem, we will fix it. Just follow few steps.
									</div>
									<br />
										<div>
											<form className="signin-form" >
												<div className="form-group mb-3">
												<i class="fa fa-user-circle"></i>
													<label className="label" for="name">Username</label>
													<input type="text" className="form-control" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
												</div>

												<div className="form-group mb-3"><i class="fa fa-eye-slash"></i>
													<label className="label" for="password">Enter New Password</label>
													<input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                                    
												</div>

                                                <div className="form-group mb-3"><i class="fa fa-eye-slash"></i>
													<label className="label" for="password">Confirm Password</label>
													<input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                                    
												</div>

												<div class="text-center">
													<button type="submit" class="btn btn-primary">Reset Password</button>
											  	</div>

												{/*
												<div class="form-group d-md-flex">
													<div class="w-50 text-left">
														<p><a href="/">Home</a></p>	
													</div>
													<div class="w-50 text-md-right">
														<p><a href="/help" >Help ?</a></p>
													</div>
												</div>	
												*/}
											</form>
											<p class="text-right"><a href="/">Home</a>
											<i class="bi bi-house-fill"></i>
											</p>
											
										</div>
										
										{/*<Link to='/signup'>
											<p class="text-center"><a href="">Sign Up</a></p>
    									</Link>*/}
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

export default ResetPassword