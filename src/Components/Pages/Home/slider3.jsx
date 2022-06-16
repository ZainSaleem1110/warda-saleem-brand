import React from 'react'
import Img1 from '../../../images/insta1.jpg'
import Img2 from '../../../images/insta2.jpg'
import Img3 from '../../../images/insta3.jpg'
import Img4 from '../../../images/insta4.jpg'

function Slider3(){
    return(
        <div className="w-100 d-flex flex-wrap justify-content-around">
            <img className="col-lg-3 col-md-6 col-12" src={Img1} alt="" srcset="" />
            <img className="col-lg-3 col-md-6 col-12 mt-md-0 mt-4" src={Img2} alt="" srcset="" />
            <img className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4" src={Img3} alt="" srcset="" />
            <img className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-4" src={Img4} alt="" srcset="" />
        </div>
    )
}
export default Slider3