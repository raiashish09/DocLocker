import React, { useEffect } from "react";
import { useState } from "react"
//import { useDispatch} from "react-redux"
import { useNavigate } from "react-router"
export default function Logout()
{
    let navigate=useNavigate();
    useEffect(()=>{
        let user=JSON.parse(sessionStorage.getItem('userlogin'));
        sessionStorage.removeItem('userlogin');
        navigate("/");
        
    },[])

}