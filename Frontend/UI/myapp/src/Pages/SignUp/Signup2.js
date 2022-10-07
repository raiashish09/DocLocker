import React, {useEffect, useState} from 'react'
//import { Link } from 'react-router-dom'

import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'


export default function Signup2() {

	
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [mobileNo, setMobileNo] = useState('')
    let navigate = useNavigate();

	const postData = async (e) => {
		e.preventDefault();
		try{
			
			const res = await Axios.post('http://localhost:8080/user/adduser',{firstName,lastName,userName,password,email,mobileNo})
			
            navigate('/signin')
			}
			catch (err){
				console.log(err)
			}
       
	 }
	return (
		
        <div>
			<body>
				<section class="ftco-section">
					<div class="container-fluid">

						<div class="row justify-content-center">
							<div class="col-md-8 col-lg-9">
								<div class="wrap d-md-flex">
									<div class="img" style={{ 'background-image': 'url(assets/img/signup2.png)' }}>
									</div>
									<div class="login-wrap p-4 p-md-5">
										<div class="d-flex">
											<div class="w-100 ">
												<h3 class="mb-4">Sign Up</h3>
											</div>
											<div class="w-80">
												<p class="social-media d-flex justify-content-end">
												</p>
											</div>
										</div>
										<form action="/admin/index.html" class="signin-form">
											<div class="form-group mb-3">
											<i class="fa fa-user"></i>
												<label class="label" for="name">First Name</label>
												<input type="text" class="form-control" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
											</div>
                                            <div class="form-group mb-3">
											<i class="fa fa-user"></i>
											<label class="label" for="password">Last Name</label>
											<input type="text" class="form-control" placeholder="Last Name"  onChange={(e) => setLastName(e.target.value)} required />
										</div>

										
                                        <div class="form-group mb-3">
											<i class="fa fa-envelope-square"></i>
												<label class="label" for="password">Email Id</label>
												<input type="email" class="form-control" placeholder="Email Id" pattern="@gmail.com" onChange={(e) => setEmail(e.target.value)} required />
										</div>
	
											<div class="form-group mb-3">
											<i class="fa fa-phone"></i>
												<label class="label" for="password">Mobile No</label>
												<input type="number" class="form-control"  maxlength="10" placeholder="Mobile No" pattern="+[0-9]{2}-[0-9]{10}" onChange={(e) => setMobileNo(e.target.value)} required />
												{/*
												<form onSubmit="return myfunc()">
												<input type="text" class="form-control" id="mobileno" value=""></input>
												<span id="messages"></span>
												<input type="submit" value="submit"></input>
												</form>
												*/}
											</div>
										</form>
									</div>
									<div class="login-wrap p-4 p-md-5">
										<div class="d-flex">
											<div class="w-100 ">
												<h3 class="mb-4">
													<br />
												</h3>
											</div>

											<div class="w-80">
												<p class="social-media d-flex justify-content-end">
												</p>
											</div>
										</div>
                                        <div class="form-group mb-3">
											<i class="fa fa-user-circle"></i>
												<label class="label" for="password">User Name</label>
												<input type="text" class="form-control" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} required />
										</div>
										
										<div class="form-group mb-3">
										<i class="fa fa-unlock-alt"></i>
											<label class="label" for="password">Password</label>
											<input type="password" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                            
										</div>
                                        <div class="form-group mb-3">
										<i class="fa fa-unlock-alt"></i>
											<label class="label" for="password">Confirm Password</label>
											<input type="password" class="form-control" placeholder="Password" required />
                                            
										</div>
										
										<div class="form-group mb-3">
											<label class="label" style={{ 'padding-top': '18px', 'height': '55px' }}></label>
											<button type="submit" 
												class="form-control btn btn-primary rounded submit px-3" onClick={postData}>Sign Up</button>
										</div>

										<div className="row">
										<div className="col">
										<Link to ={'/signin'}>Already an user? Sign In</Link>
										
										</div>
										<div className="col">
										{/*<p class="text-center"><a href="/signin">Already an user? Sign In</a></p>*/}
										<p class="text-center"><a href="/">Home</a><i class="bi bi-house-fill"></i></p>
										</div>
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