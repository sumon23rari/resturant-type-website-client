import React, { useContext, useEffect, useState } from 'react';
import bgImg from "../../assets/others/authentication.png";
import logInImg from "../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic=useAxiosPublic();
  const {createUser,userProfileUpdate}=useContext(AuthContext)
const navigate=useNavigate();
    const [disable,setDisable]=useState(true);
    useEffect(()=>{
      loadCaptchaEnginge(6)
        },[])
    const handleValidatedCapcha=(e)=>{
      const  userCaptcha=e.target.value;
     if (validateCaptcha(userCaptcha)===true) {
      setDisable(false)
     }
else{
setDisable(false)
}
     
    }
    const onSubmit = (data) => {
      console.log(data)
      createUser(data.email,data.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('user',user)
        userProfileUpdate(data.name,data.photo)
        .then(()=>{

          Swal.fire({
            title: "user profile update successfully",
            text: "You clicked the button!",
            icon: "success"
          })

const userInfo={
  name:data.name,
  email:data.email,
  photo:data.photo
}
axiosPublic.post('/user',userInfo)
.then((res)=>{
  if (res.data.insertedId) {
    reset();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "user added successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }
})
.catch((err)=>{
  console.log(err)
})
navigate('/')
        })
   
        .catch((error)=>{
          Swal.fire({
            title: `${error}`,
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
        // ...
      })
      .catch((error) => {
       
        const errorMessage = error.message;
     console.log(errorMessage)
      });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col shadow-xl py-10 lg:flex-row-reverse lg:justify-around" style={{backgroundImage:`url(${bgImg})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          <img src={logInImg} alt='logInImg' className='w-2/5'/>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="enter your name" {...register("name", { required: true })} className="input input-bordered" />
                {errors.name && <span className='text-red '>name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <input type="text" name="photo" placeholder="enter your name" {...register("photo", { required: true })} className="input input-bordered" />
                {errors.photo && <span className='text-red '>photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className='text-red'>This field is required</span>}
              </div>
              <div className="form-control">
                          <label className="label">
                              <span className="label-text">Password</span>
                          </label>
                          <input type="password"  {...register("password", {
                              required: true,
                              minLength: 6,
                              maxLength: 10,
                              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                          })} placeholder="password" className="input input-bordered" />
                          {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                          {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                          {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 10 characters</p>}
                          {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                      
                      </div>
              <div className="form-control">
                <label className="label">
                 <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input type="text" name="captcha" onBlur={handleValidatedCapcha} placeholder="type hear" className="input input-bordered" required />
          
               
              </div>
            
              <div className="form-control mt-6">
                          <input className="btn btn-primary" type="submit" value="Sign Up" disabled={disable} />
                      </div>
            </form>
            <p className='text-center my-3'>already have an account <Link to="/logIn">logIn</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;