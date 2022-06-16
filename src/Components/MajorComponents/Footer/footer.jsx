import React from 'react'
import {Link} from 'react-router-dom'
import FooterLogo from '../../../images/evolve-logo.png'
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import {RiArrowGoBackFill} from 'react-icons/ri'

function Footer() {
    return (
        <div className='w-100 px-4 mb-3 text-lg-left text-center'>
            <div className='pb-3 pt-5 w-100 d-flex flex-wrap' style={{borderTop:"1px solid lightgray",borderBottom:"1px solid lightgray"}}>
            <div className='d-flex flex-column col-lg-8 col-12 order-lg-1 order-2 mt-lg-0 mt-5'>
                <div className='d-lg-flex d-block'>
                    <h3 className='font-weight-bolder'>Follow Us</h3>
                    <div className='ml-lg-5 ml-0 mt-lg-0 mt-4'>
                        <FaFacebookF style={{fontSize:"20px"}}/>
                        <FaInstagram className='ml-4' style={{fontSize:"22px"}}/>
                        <FaTwitter className='ml-4' style={{fontSize:"22px"}}/>
                    </div>
                </div>
                <ul className='mt-4 navList' style={{listStyle:"none"}}>
                <li className='pt-2'>
                <Link to="/About" className='link'>About Us</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/Contact" className='link'>Contact Us</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/Shipping" className='link'>Shipping Policy</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/Privacy" className='link'>Privacy Policy</Link>
            </li>
                </ul>
            </div>
            <div className='col-lg-4 col-12 order-lg-2 order-1'>
                    <h1 className="" style={{fontSize:"22px",letterSpacing:"2"}}>SUBSCRIBE FOR UPDATES</h1>
                    <input className="" style={{width:"95%",height:"6vh",fontSize:"15px",borderBottom:"1px solid black",borderTop:"none",borderLeft:"none",borderRight:"none",outline:"none"}} type="text" placeholder="Enter your email here..." />
                    <RiArrowGoBackFill style={{fontSize:"18px",marginLeft:"-20px"}}/>
            </div>
            <div>
            </div>
        </div>
        <img className="mt-3" src={FooterLogo} alt="" srcset="" />
        </div>
    )
}

export default Footer
