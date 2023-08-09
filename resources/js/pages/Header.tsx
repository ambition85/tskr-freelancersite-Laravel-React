import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('avatar');
    window.location.href = "/";
  }

  return (
    <div className='flex pt-[20px] pb-[20px] pl-[30px] pr-[30px] w-full h-[80px] bg-[#222]'>
      {/* Logo item */}
      <div className="flex w-[50%]">
        <Link className="flex" to="/">
          <img className="w-[36px] h-[36px]" src="/image/logo_icon.png" />
          <div className="ml-[10px]">
            <span className="font-sans text-[24px] font-[700] text-[#fff]">Tskr</span>
            <span className="font-sans text-[24px] font-[700] text-[#5BBB7B]">.com</span>
          </div>
        </Link>
      </div>
      {/* Nav items */}
      <div className="flex justify-end w-[50%]">
        <div className="flex gap-[20px]">
          <Link className="font-sans text-[15px] font-[700] leading-[28px] text-[#fff] hover:text-[#5BBB7B] pt-[4px] pb-[4px] pl-[15px] pr-[15px]" to="/login">Messages</Link>
          <Link className="font-sans text-[15px] font-[700] leading-[28px] text-[#fff] hover:text-[#5BBB7B] pt-[4px] pb-[4px] pl-[15px] pr-[15px]" to="/register">Available Porjects</Link>
        </div>
        <div className="flex h-[40px] w-[1px] shrink-0 bg-[#E9E9E9] ml-[15px] mr-[15px]"></div>
        <div className="flex justify-end gap-[20px]">
          <svg className="svg-inline--fa fa-search w-[16px] h-[16px] my-[12px] text-white hover:text-[#5BBB7B]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505.941 475.059l-136.002-136.002c31.211-35.808 50.061-82.102 50.061-132.557C420 101.803 327.197 9 214 9S8 101.803 8 215s92.803 206 206 206c50.455 0 96.748-18.85 132.557-50.061l136.002 136.002c10.001 10.001 23.188 15.53 37.443 15.53s27.442-5.529 37.443-15.53c20.585-20.586 20.585-53.98 0-74.566zM214 361c-86.019 0-156-69.981-156-156s69.981-156 156-156 156 69.981 156 156-69.981 156-156 156z"></path></svg>
          {/* <img className="w-[36px] h-[36px] color-[#5BBB7B]" src="/image/Search.png" /> */}
          <Link className="font-sans text-[15px] font-[700] leading-[28px] text-[#fff] hover:text-[#5BBB7B] pt-[4px] pb-[4px] pl-[15px] pr-[15px]" to="/">Login</Link>
          <Link className="font-sans text-[15px] font-[700] leading-[28px] text-[#222] hover:text-[#FFF] hover:bg-[#5BBB7B] pt-[4px] pb-[4px] pl-[20px] pr-[20px] bg-[#FFF] rounded-[4px]" to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}