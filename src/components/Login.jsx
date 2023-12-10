import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./margin.css"


const title = "Login"
const socialTitle = "Login with Social Media"
const btnText = "Login Now"
const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const Login = () => {
     useEffect(() => {
   window.scrollTo({ top: 0, left: 0 })
}, [])
    const [errorMessage,setErrorMessage] = useState("")
    const {login,signUpWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || "/"

    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password).then((result) =>{
            const user = result.user;
            alert("Login Successful");
            navigate(from,{replace:true})
        }).catch((error)=>{
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email & password. ")
        })
    }
    const handleRegister = () =>{
        signUpWithGoogle().then((result)=>{
            const user = result.user
            navigate(from,{replace:true})
        }).catch((error)=>{
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email & password. ")
        })
    }
  return (
    <div className=' login-section padding-tb  section-bg'>
        <div className="animate__animated animate__bounceInUp container mtop rounded-4 mt-md-0 mt-lg-0">
            <div className=" account-wrapper rounded-4">
                <h3 className=" title mb-5">{title}</h3>
                <form  className=" account-form " onSubmit={handleLogin}>
                    <div className=" form-group">
                        <input type="email" name='email' id='email' placeholder='Email Adress  * ' required/>
                    </div>
                    <div className=" form-group">
                        <input type="password" name='password' id='password' placeholder='Password  *'  required />
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
                        <div className=' d-flex justify-content-between flex-wrap pt-sm-2'>
                            <div className=" checkgroup">
                                <input type="checkbox" name='remember' id='remember' />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <Link to="/forgetpass">Forget Password</Link>
                        </div>
                    </div>
                    <div className=" form-group">
                        <button type='submit' className=' d-block lab-btn'>
                            <span>{btnText}</span>
                        </button>
                    </div>
                </form>

                <div className=" account-bottom">
                    <span className=" d-block cate pt-10">
                        Don't have an account? <Link to="/sign-up">Sign Up</Link>
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
  )
}

export default Login
