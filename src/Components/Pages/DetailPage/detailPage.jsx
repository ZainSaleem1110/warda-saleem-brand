import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
import Img1 from '../../../images/newArrivalDetailPageImages/lal-bagh (1).jpeg'
import Img2 from '../../../images/newArrivalDetailPageImages/lal-bagh (2).jpeg'
import Img3 from '../../../images/newArrivalDetailPageImages/lal-bagh (3).jpeg'
import Img4 from '../../../images/newArrivalDetailPageImages/lal-bagh (4).jpeg'
import Img5 from '../../../images/newArrivalDetailPageImages/lal-bagh (5).jpeg'
import Img6 from '../../../images/newArrivalDetailPageImages/lal-bagh-slider (1).jpeg'

function DetailPage() {
    return (
            <div className=' px-2'>
        <div className='pt-5 px-3'>
            <p className='pt-2' style={{color:"#6f6f6f"}}>HOME <span className='ml-2'> <AiFillCaretRight/> </span><span className='ml-2 pb-1' style={{color:"#6f6f6f"}}>NEW ARRIVALS</span><span className='ml-2'> <AiFillCaretRight/> </span><span className='ml-2 pb-1' style={{color:"black",borderBottom:"1px solid black"}}>LAL BAGH</span></p>
            <div className="w-100 d-flex flex-wrap">
                <div className="col-md-1 col-sm-2 col-3">
                        <img className="d-block w-100 mt-3" src={Img1} alt="" srcset="" />
                        <img className="d-block w-100 mt-3" src={Img2} alt="" srcset="" />
                        <img className="d-block w-100 mt-3" src={Img3} alt="" srcset="" />
                        <img className="d-block w-100 mt-3" src={Img4} alt="" srcset="" />
                        <img className="d-block w-100 mt-3" src={Img5} alt="" srcset="" />
                </div>
                    <div className="col-md-6 col-9 mt-3">
                        <img className="detail-page-slider position-relative w-100 h-100" src={Img6} alt="" srcset="" />
                        <button className=" mt-1 px-3 py-2 mr-4" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
                    </div>
                    <div className="col-lg-5 col-10 pr-3 mt-lg-3 mt-5 ">
                        <div style={{borderBottom:"1px solid black"}}>
                        <h4>LAL BAGH</h4>
                        <p>SKU: WS21-096</p>
                        <h5>Rs 49,500</h5>
                        <p>Color: Red</p>
                        <p>Fabric: Velvet</p>
                        <p>Work Details: Embroided with Zari and Sequin with Cypress Tree Motifs and Hand Embellished Sequin and Gota Work Detailing on Sleeves.</p>
                    </div>
                    <div className="mt-3" style={{borderBottom:"1px solid black"}}>
                        <h3>PRODUCT DETAILS</h3>
                        <p>Crimson Red Formal Zari and Sequin Embroidered Long Shirt with Cypress Tree Motifs and Hand Embellished Sequin and Gota Work Detailing on Sleeves. Paired with Floral Digital Printed Dhaka Pajama and Dip Dyed Formal Rolex Dupatta to complete the Look.</p>
                    </div>
                    <div className="mt-4">
                        <h4>SIZE</h4>
                        <div className="d-flex flex-wrap">
                            <div className="size bg-dark text-white">XS</div>
                            <div className="size ml-3">S</div>
                            <div className="size ml-3">M</div>
                            <div className="size ml-3">L</div>
                            <div className="size ml-3">XL</div>
                        </div>
                        <h5 className="mt-5">QUANTITY</h5>
                    </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default DetailPage
 