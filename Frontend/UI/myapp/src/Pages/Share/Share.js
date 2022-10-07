//import React, { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
//import { Link, Navigate } from 'react-router-dom'
//import Axios from 'axios'

export default function Share() {
	let user = JSON.parse(sessionStorage.getItem('userlogin'))
/*
	const [link, setlink] = useState('')
	const [QRcode, setQRcode] = useState('')

	const postData = async () => {
		try{
			const res = await Axios.post(`http://localhost:8081/login`,{link,QRcode})
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
*/
	//Rendering

	if(user!==null)
  {

	return (
		<div>
			<body>
				<section class="ftco-section">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-md-12 col-lg-10">
								<div class="wrap d-md-flex">
									<div class="img" style={{ 'background-image': 'url(assets/img/link.png)' }}>
									</div>
									<div class="login-wrap p-4 p-md-5">
										<div class="d-flex">
											<div class="w-100 ">
												<h3 class="mb-4"><u>Share</u></h3>
											</div>
											<br />
											<br />
											<div class="w-100">
												<p class="social-media d-flex justify-content-end">
												</p>
											</div>
										</div>
										<div>
											<form className="signin-form" >
                                                <div className="form-group">
												<h10>Share via</h10>
                                                    <button type="button"
                                                        className="form-control btn btn-primary rounded submit px-3" /*onClick={handlerex}*/>LINK</button>
                                                </div>
												<br />
												<div className="form-group">
												<h10>Share via</h10>
													<button type="button"
													    className="form-control btn btn-primary rounded submit px-3" /*onClick={handlerex}*/>QR Code</button>
												</div>

												<br />
												{/*
												<div className="row">
													<div className="col">
														<p class="text-center"><a href="E:/CDAC/Project/doc-locker/UI/myapp/src/Pages/Home/Sample.js"></a></p>
													</div>
													<div className="col">
														{/*<p class="text-center"><a href="/dashboard">Home</a></p>
														<Link to ={'/dashboard4'}>Home<i class="bi bi-house-fill"></i></Link>
													</div>
												</div>

												<p class="text-right"><u><a href="/dashboard">Back<i class="bi bi-arrow-left-square-fill"></i></a></u></p>

												<p class="text-left"><u><a href="/dashboard">Logout<i class="bi bi-box-arrow-left"></i></a></u></p>
*/}

												<div class="form-group d-md-flex">
													<div class="w-50 text-left">
														<div class="w-20 text-md-left">
															<a href="/dashboard"><i class="bi bi-arrow-left-square-fill"></i>Back</a>
														</div>
														</div>
														<div class="w-50 text-md-right">
																<a href="/logout"><i class="bi bi-box-arrow-left"></i>Logout</a>
														</div>
												</div>		

											</form>
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
}

