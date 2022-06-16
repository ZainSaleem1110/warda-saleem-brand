import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../images/logo.png'

function Navbar() {
    return (
        <div className='navbar border-bottom d-flex justify-content-md-start justify-content-center'>
            <Link to='/' className='link col-lg-2 col-md-3 col-sm-4 col-8'><img className='w-100' src={Logo} alt="logo"/></Link>
            <ul className='navList mt-2 col-lg-10 col-md-9 col-sm-8 col-12'>
            <li className='ml-3 pt-2'>
                <Link to="/arrival" className='link'>NEW ARRIVALS</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/porter" className='link'>PRET-A-PORTER</Link>
            </li>
            <li className='ml-3 pt-2 link dropParent' style={{position:"relative"}}>
                <Link to="/detailpage" className="link">LUXURY PRET</Link>
                <div style={{position:"absolute",width:"180px",zIndex:"6"}}>
                <div className="dropdown mt-3">
                    <ul className="dropdown bg-light py-3">
                        <li className="w-100 py-1 px-3">
                            <Link to="/luxeEdition" className="link">LUXE EDITION</Link>
                        </li>
                        <li className="mt-3 w-100 py-1 px-3">
                            <Link to="/festiveEdition" className="link">FESTIVE EDITION</Link>
                        </li>
                        <li className="mt-3 w-100 py-1 px-3">
                            <Link to="/collection" className="link">LAMOUR FESTIVE EMBROIDERED COLLECTION</Link>
                        </li>
                        <li className="mt-3 w-100 py-1 px-3">
                            <Link to="/luxe" className="link">LUXE EDITION</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/prints" className='link'>JHIRKI BLOCK PRINTS</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/formal" className='link'>FORMALS</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/wedding" className='link'>WEDDING FESTIVAL</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/bridal" className='link'>BRIDALS</Link>
            </li>
            <li className='ml-3 pt-2'>
                <Link to="/wardha" className='link'>WARDHA SALEEM BRIDES</Link>
            </li>
            </ul>
        </div>
    )
}

export default Navbar
