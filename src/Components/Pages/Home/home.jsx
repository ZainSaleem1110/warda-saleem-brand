import React,{useState} from 'react'
import ApiData from '../../../Api/data'
import Slider2 from './slider2'
import Slider3 from './slider3'
import Slider1 from './HomeSlider'

function Arrivals() {
    const [arrival]=useState(ApiData)
    return (
        <div className=''>
            <Slider1/>
        <div className='px-4 py-5'>
            <h1 className=' text-center' style={{letterSpacing:"4px"}}>NEW ARRIVALS</h1>
        </div>
        <Slider2/>
        <div className="d-flex">
            {
                arrival.Home.ArrivalSection.map(e=>{
                    return <div className="text-center">
                        <img className="col-md-4 col-12 w-100 px-4" src={e.productImg} alt="product-img" />
                        <h1 className="my-4 textRes" style={{fontStyle:"italic"}}>{e.productName}</h1>
                        <button className="col-5 bg-white text-dark font-weight-bold px-md-5 px-3 py-md-3 py-1 " style={{border:"2px solid black"}}><h5 className="textRes">{e.button}</h5></button>
                        </div>
                })
            }
        </div>
        <img className="w-100 col-12 my-5" src={arrival.Home.ArrivalFold.foldImg} alt="foldimg" />
        <img className="w-100 col-12 my-5" src={arrival.Home.ArrivalFold.blogImg} alt="blogimg" />
        <img className="col-12 my-5" src={arrival.Home.ArrivalFold.luxuryImg} alt="luximg" />
        <div className='px-4 pb-5'>
            <h1 className=' text-center textRes' style={{letterSpacing:"4px",}}>@WARDHASALEEMOFFICIAL</h1>
        </div>
        <Slider3/>
        </div>
    )
}

export default Arrivals