import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import FaceIcon from '@material-ui/icons/Face'

import MetaData from '../../../Components/User/More/Metadata'
import { login, clearErrors, register } from '../../../Redux/Actions/UserAction'
import './style.css'
import Loading from '../../../Components/User/More/Loader'

const LoginSignup = ({ location }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, loading, isAuthenticated } = useSelector(state => state.user)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1653122947/shoe/24-248253_user-profile-default-image-png-clipart-png-download_vkwpfv.png'
    )

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = user

    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)

    const loginSubmit = e => {
        e.preventDefault()
        dispatch(login(loginEmail, loginPassword))
    }

    useEffect(() => {
        if (error) {
            message.error(error)
            dispatch(clearErrors())
        }

        if (isAuthenticated) {
            message.success('Login Successfully')
            navigate('/')
        }
    }, [dispatch, error, isAuthenticated, navigate])

    const registerSubmit = e => {
        e.preventDefault()

        const RegisterInfo = {
            name,
            email,
            password,
            avatar
        }
        dispatch(register(RegisterInfo))
        console.log('register', RegisterInfo)
    }

    const registerDataChange = e => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader()

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])
        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    const switchTabs = (e, tab) => {
        if (tab === 'login') {
            switcherTab.current.classList.add('shiftToNeutral')
            switcherTab.current.classList.remove('shiftToRight')

            registerTab.current.classList.remove('shiftToNeutralForm')
            loginTab.current.classList.remove('shiftToLeft')
        }
        if (tab === 'register') {
            switcherTab.current.classList.add('shiftToRight')
            switcherTab.current.classList.remove('shiftToNeutral')

            registerTab.current.classList.add('shiftToNeutralForm')
            loginTab.current.classList.add('shiftToLeft')
        }
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <MetaData title="Login or Signup" />
                    <div className="LoginSignUpContainer">
                        <div className="LoginSignUpBox">
                            <div>
                                <div className="login_signUp_toggle">
                                    <p onClick={e => switchTabs(e, 'login')}>
                                        LOGIN
                                    </p>
                                    <p onClick={e => switchTabs(e, 'register')}>
                                        REGISTER
                                    </p>
                                </div>
                                <button ref={switcherTab}></button>
                            </div>
                            <form
                                className="loginForm"
                                ref={loginTab}
                                onSubmit={loginSubmit}
                            >
                                <div className="loginEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={loginEmail}
                                        onChange={e =>
                                            setLoginEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="loginPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={loginPassword}
                                        onChange={e =>
                                            setLoginPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <Link to="/password/forgot">
                                    Forgot Password ?
                                </Link>
                                <input
                                    type="submit"
                                    value="Login"
                                    className="loginBtn"
                                />
                                <Link to="/">
                                    <span>Login as a guest ?</span>
                                </Link>
                            </form>

                            <form
                                className="signUpForm"
                                ref={registerTab}
                                encType="multipart/form-data"
                                onSubmit={registerSubmit}
                            >
                                <div className="signUpName">
                                    <FaceIcon />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={registerDataChange}
                                    />
                                </div>

                                <div id="registerImage">
                                    <img
                                        src={avatarPreview}
                                        alt="Avatar Preview"
                                    />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Register"
                                    className="signUpBtn"
                                />
                            </form>
                        </div>
                    </div>
                    <div></div>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </>
            )}
        </>
    )
}

export default LoginSignup