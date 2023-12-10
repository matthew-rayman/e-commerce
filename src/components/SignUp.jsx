import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
const title = "Register"
const socialTitle = "Login with Social Media"
const btnText = "Signup Now"
const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]
import "./margin.css"

const SignUp = () => {

     useEffect(() => {
   window.scrollTo({ top: 0, left: 0 })
}, [])
    const [errorMessage,setErrorMessage] = useState("")
     const {createUser,signUpWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || "/"

    const handleSignup = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if(password !== confirmPassword){
            setErrorMessage("Password doesn't match.")
        }else{
            setErrorMessage("");
            createUser(email,password).then((userCredential)=>{
                const user = userCredential.user;
                alert("Account created successfully!");
                navigate(from,{replace:true})
            }).catch((error)=>{
                alert(`${error.message}`)
            
        })
        }
    }
    const handleRegister = ()=>{
        signUpWithGoogle().then((result)=>{
            const user = result.user
            navigate(from,{replace:true})
        }).catch((error)=>{
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email & password. ")
        })
    }

  return (
    <div>
       <div className=' login-section padding-tb section-bg'>
        <div className="animate__animated animate__bounceInUp container mtop">
            <div className=" rounded-4 account-wrapper">
                <h3 className=" title mb-5">{title}</h3>
                <form  className=" account-form " onSubmit={handleSignup}>
                    <div className=" form-group">
                        <input type="text" name='name' id='name' placeholder='Full Name  * ' required/>
                    </div>
                    <div className=" form-group">
                        <input type="email" name='email' id='email' placeholder='Email Adress  * ' required/>
                    </div>
                    <div className=" form-group">
                        <input type="password" name='password' id='password' placeholder='Password  *'  required />
                    </div>
                    <div className=" form-group">
                        <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password  *'  required />
                    </div>
                    <div>
                        {
                            errorMessage && (
                                <div className=" error-message text-danger mb-1">
                                    {errorMessage}
                                </div>
                            )
                        }
                    </div>
                    
                    <div className=" form-group">
                        <button type='submit' className=' d-block lab-btn'>
                            <span>{btnText}</span>
                        </button>
                    </div>
                </form>

                <div className=" account-bottom">
                    <span className=" d-block cate pt-10">
                        Have an account? <Link to="/login">Login</Link>
                    </span>
                    <span className=' or'>
                        <span>or</span>
                    </span>

                    <h5 className=" subtitle">{socialTitle}</h5>
                    <ul className=" social-icons lab-ul justify-content-center">
                        <li>
                            <button className='github' onClick={handleRegister}><i className=" icofont-github"></i></button>
                        </li>
                        <li>
                            <a href="/" className=' facebook'><i className=" icofont-facebook"></i></a>
                        </li>
                        <li>
                            <a href="/" className=' twitter'><i className=" icofont-twitter"></i></a>
                        </li>
                        <li>
                            <a href="/" className=' linkedin'><i className=" icofont-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="/" className=' instagram'><i className=" icofont-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default SignUp
