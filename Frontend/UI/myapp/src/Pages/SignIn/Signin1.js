import React, { useEffect, useState } from 'react'
//import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Axios from 'axios'

const Signin1= () => {

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
    let navigate = useNavigate();

	const postData = async (e) => {
        e.preventDefault();
        
		
        const res = await Axios.post('http://localhost:8080/user/signin',{userName,password})
			.then(data =>{
				//console.log(data.data)
			if(data.data !=="Signin Invalid")
			{
                var verifieduser=data.data
                sessionStorage.setItem('userlogin',JSON.stringify(verifieduser));
                console.log(data.data)
                console.log(JSON.parse(sessionStorage.getItem('userlogin')))
                navigate("/dashboard")
            }
			else if(data.data ==="Signin Invalid")
			{
				alert("failed")
                navigate("/")
				//toast.error("sign in invalid");
			}
			}).catch(error =>{console.log(error);});

			let user = JSON.parse(sessionStorage.getItem('userlogin'));
			var Id = user.userId;

			console.log(Id)
			Axios.post("http://localhost:8080/usersession/add/"+Id)
			.then()
	}


	return (
		<div>
			<body>
				<section class="ftco-section">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-md-12 col-lg-10">
								<div class="wrap d-md-flex">
									<div class="img" style={{ 'background-image': 'url(assets/img/login.png)' }}></div>
										<div class="login-wrap p-4 p-md-5">
											<div class="d-flex">
												<div class="w-80 ">														
													<h3 class="mb-4"><u>Sign In</u></h3>
												</div>
												<div class="w-80">
													<p class="social-media d-flex justify-content-end"></p>
												</div>
											</div>
											<div>
											<form className="signin-form" >
												<div className="form-group mb-3">
													<i class="fa fa-user-circle"></i>
														<label className="label" for="name">Username</label>
														<input type="text" className="form-control" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
												</div>
												<div className="form-group mb-3"><i class="fa fa-eye-slash"></i>
													<label className="label" for="password">Password</label>
													<input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />    
												</div>
												<div className="form-group">
													<button type="submit"
														className="form-control btn btn-primary rounded submit px-3" onClick={postData}> 
                                                       sign in</button>
												</div>

												<div class="form-group d-md-flex">
													<div class="w-50 text-left">
														<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
															<div type="checkbox" checked/>
																<span class="checkmark"></span>
														</label>
															</div>
															<div class="w-50 text-md-right">
																<a href="/password">Forgot Password ?</a>
															</div>
													</div>		
										</form>
										<p class="text-center"><a href="/">Home</a><i class="bi bi-house-fill"></i></p>
									</div>
										
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

export default Signin1