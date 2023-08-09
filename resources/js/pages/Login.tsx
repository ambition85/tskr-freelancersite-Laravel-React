import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { setAvatar, setAuthentication, setid, setname } from '../redux/reducers/authentication'
import { useAppDispatch } from '../redux/hooks'
import setAuthToken from '../redux/utils/setauthtoken'
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@mui/material';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const userData = {
        "email": email,
        "password": password
    }

    const handleLogin = () => {
        axios.post('/api/user/login', userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response: AxiosResponse) => {
            if (response.data["success"] == true) {
                localStorage.setItem("token", response.data["data"]["token"]);
                localStorage.setItem("username", response.data["data"]["name"]);
                localStorage.setItem("userId", response.data["data"]["id"]);
                localStorage.setItem("avatar", response.data["data"]["avatar"]);
                setAuthToken(response.data["data"]["token"]);
                dispatch(setAuthentication(true));
                dispatch(setname(response.data["data"]["name"]));
                dispatch(setid(response.data["data"]["id"]));
                dispatch(setAvatar(response.data["data"]["avatar"]));
                navigate('/');
            } else {
                alert(response.data["message"]);
            }
        }).catch((err) => console.log(err));
    }

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('id');
    const avatar = localStorage.getItem('avatar');

    if (token) {
        dispatch(setAuthentication(true));
        dispatch(setname(username ?? ''));
        dispatch(setid(Number(userId) || 0));
        dispatch(setAvatar(avatar ?? ''));
    }

    return (
        <div className='flex w-[100%] bg-[#FFEDE8] py-[120px]'>
            <div className='flex flex-col w-[40%] mr-auto ml-auto'>
                <span className='text-center pb-[60px] text-[32px] font-[700] gap-[65px]'>Log In</span>
                <div className='flex flex-col bg-white px-[50px] rounded-[8px] py-[65px] gap-[30px]'>
                    <span className='text-center text-[20px] font-[500] text-[#222]'>Welcome Back!</span>
                    <span className='text-center'>Don't have an account? <Link className='text-[#5BBB7B] hover:text-[#5bbb7bc4]' to="/register">Sign Up!</Link></span>
                    <form className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-[15px] font-[500] leading-[28px] text-[#222]'>Email Address</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' placeholder='Email' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-[15px] font-[500] leading-[28px] text-[#222]'>Password</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' type='password' placeholder='Password'/>
                        </div>
                        <div className='flex'>
                            <div className='flex w-[50%]'>
                                <input className='' type='checkbox' />
                                <span className='text-[16px] font-[400] leading-[28px] text-[#222]'>Remember me</span>
                            </div>
                            <div className='flex justify-end w-[50%]'>
                                <Link className='text-[16px] font-[400] leading-[28px] text-[#222]' to="/">Forgotten Password?</Link>
                            </div>
                        </div>
                        <Link to="/user-dashboard"><button className='font-sans text-[15px] leading-[28px] text-[#fff] font-[700] bg-[#5BBB7B] rounded-[4px] py-[12px] hover:bg-[#5bbb7bc9]'>Log In</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}



{/* <Box className="mt-[135px] mb-[162px]"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 543,
                        height: 612,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: "9px",
                        backgroundColor: "#fff",
                        boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.25)",
                    },
                }}
            >
                <Paper sx={{ padding: "60px 99.5px" }} className='flex flex-col gap-[20px]'>
                    <div className='font-[500] text-[18px] leading-[22px] text-[#182233]'>Log-in</div>
                    <form className='flex flex-col gap-[20px]' onSubmit={handleLogin}>
                        <input
                            style={{ padding: "8px 10px 8px 16px", border: "1px solid #9CA3AF" }}
                            className='w-[300px] ml-auto mr-auto h-[44px] rounded-[7px] input_style focus:outline-[#3088c2] hover:outline-black transition duration-500 ease-in-out'
                            type="email"
                            placeholder='Username'
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <input
                            style={{ padding: "8px 10px 8px 16px", border: "1px solid #9CA3AF" }}
                            className='w-[300px] ml-auto mr-auto h-[44px] rounded-[7px] input_style focus:outline-[#3088c2] hover:outline-black transition duration-500 ease-in-out'
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        <button
                            style={{ padding: "16px 24px" }}
                            onClick={handleLogin}
                            className='w-[89px] ml-auto mr-auto hover:bg-[#116bccd0] bg-[#116ACC] rounded-[7px] text-white text-[16px] leading-[20px] font-[500]'>
                            Login
                        </button>
                    </form>

                    <div className='font-[400] text-[14px] leading-[20px] text-[#182233]'>Or login with</div>

                    <button
                        className='p-[15px] w-full rounded-[10px] hover:bg-[#166ada] bg-[#1877F2] flex gap-[15px] text-[20px] leading-[23px] text-white font-[700]'>
                        <img src="/image/facebook.png" />
                        Sign In with Facebook
                    </button>

                    <button
                        style={{ boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168)" }}
                        className='p-[15px] w-full rounded-[10px] hover:bg-[#f0f0f0] bg-[#fff] flex gap-[15px] text-[20px] leading-[23px] text-[#787878] font-[600]'>
                        <img src="/image/google.png" />
                        Sign In with Google
                    </button>

                    <Link className='text-center text-[#116ACC] font-[400] text-[14px] leading-[20px]' to="/forgot">Forgot Password</Link>

                    <Link className='text-center text-[#116ACC] font-[400] text-[14px] leading-[20px]' to="/register">Register</Link>
                </Paper>
            </Box> */}
