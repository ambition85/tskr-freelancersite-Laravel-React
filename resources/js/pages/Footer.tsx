import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='w-[full] shrink-0 bg-[#222] pb-[30px]'>
      <div className='w-[80%] m-auto'>
        <div className='flex pt-[27px] pb-[25px]'>
          <div className='flex w-[50%]'>
            <Link className="font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]" to="/login">Terms of Sevice</Link>
            <Link className="font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]" to="/login">Privacy Policy</Link>
            <Link className="font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]" to="/login">Site Map</Link>
          </div>
          <div className='flex w-[50%] justify-end items-center'>
            <Link className='font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]' to="/">Follow Us</Link>
            <Link className='fa fa-facebook text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/"></Link>
            <Link className='fa fa-twitter text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/"></Link>
            {/* <Link className='fa fa-instagram text-white mr-[20px]' to="/"></Link> */}
            <Link className='fa fa-instagram text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/"></Link>
            <Link className='fa fa-linkedin text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/"></Link>
          </div>
        </div>

        <hr className='text-[#fff] opacity-[0.07]' />

        <div className='pt-[60px] flex justity-center'>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1] pb-[30px]'>
                <li>About</li>
                <Link className='hover:text-[#FFF] pt-[20px]' to=""><li>About Us</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Become Seller</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Jobs on Freeio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Pricing</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Services Freeio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Terms of Service</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Login</li></Link>
              </ul>
            </div>
          </div>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1]'>
                <li>Categories</li>
                <Link className='hover:text-[#FFF] pt-[20px]' to=""><li>Design & Creative</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Development & IT</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Music & Audio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Programming & Tech</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Digital Marketing</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Finance & Accounting</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Writing & Translation</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Trending</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Lifestyle</li></Link>
              </ul>
            </div>
          </div>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1]'>
                <li>Support</li>
                <Link className='hover:text-[#FFF] pt-[20px]' to=""><li>Help & Support</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>FAQ Freeio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Contact Us</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Services</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Terms of Service</li></Link>
              </ul>
            </div>
          </div>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1]'>
                <li>Subscribe</li>
                <Link className='pt-[40px]' to=""><li>Quick Links</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Careers</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Report an Issue</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto  font-sans text-[14px] leading-[28px] text-[#FFFFFFA1] font-[400]'>
        © 2023 Tskr.com – All Rights Reserved
      </div>
    </div>
  )
}
