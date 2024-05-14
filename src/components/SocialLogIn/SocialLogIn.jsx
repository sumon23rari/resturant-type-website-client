import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const {googleSignIn}=useAuth();
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();
    const handleGoogleSignIn=()=>{
googleSignIn()
.then((result)=>{
    const user=result.user;
    const userInfo={
        name:user.displayName,
        email:user.email,
        phto:user.photoURL,
    }
    axiosPublic.post('/user',userInfo)
    .then((res) => {
        // Signed up 
       
        console.log('user',res)
        userProfileUpdate(data.name,data.photo)
        .then(()=>{

       

const userInfo={
  name:data.name,
  email:data.email,
  photo:data.photo
}
axiosPublic.post('/user',userInfo)
.then((res)=>{
  if (res.data.insertedId) {
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
    console.log('user',user)
navigate('/')
  })
.catch((err)=>{
    console.log(err)
})
    }
    return (
        <div className="p-8">
        <div className="divider"></div>
        <div>
            <button onClick={handleGoogleSignIn} className="btn w-full font-bold text-xl">
                <FaGoogle className="mr-2"></FaGoogle>
                Google
            </button>
        </div>
    </div>
    );
};

export default SocialLogIn;