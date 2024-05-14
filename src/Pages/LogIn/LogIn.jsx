import React, { useContext, useEffect, useState } from 'react';
import logInImg from "../../assets/others/authentication1.png";
import bgImg from "../../assets/others/authentication.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogIn from '../../components/SocialLogIn/SocialLogIn';
const LogIn = () => {
const location=useLocation();
const navigate=useNavigate();

let from = location.state?.from?.pathname || "/";
console.log('state in the location',location.state)
  const [disable,setDisable]=useState(true);
const {signInUser}=useContext(AuthContext)
  useEffect(()=>{
loadCaptchaEnginge(6)
  },[])
 
    const handleValidatedCapcha=(e)=>{
     const userCaptcha =e.target.value;
     if (validateCaptcha(userCaptcha)===true) {
      setDisable(false)
     }
else{
setDisable(false)
}
     
    }
    const handleLogIn=e=>{
      e.preventDefault();
      const form=e.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password)
      signInUser(email,password)
      .then((userCredential)=>{
        const user = userCredential.user;
        Swal.fire({
          title: "user logIn successfully",
          text: "You clicked the button!",
          icon: "success"
        });
        navigate(from, { replace: true });
        console.log('user',user)
      })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col shadow-xl py-10 lg:flex-row lg:justify-around" style={{backgroundImage:`url(${bgImg})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          <img src={logInImg} alt='logInImg' className='w-2/5'/>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                 <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input type="text" name="captcha"  onBlur={handleValidatedCapcha} placeholder="type hear" className="input input-bordered" required />
            
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054] text-white" disabled={disable}>Login</button>
              </div>
            </form>
            <p className='capitalize cursor:pointer text-center'><small>new year?<Link to="/register">create an account</Link></small></p>
          <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    );
};

export default LogIn;