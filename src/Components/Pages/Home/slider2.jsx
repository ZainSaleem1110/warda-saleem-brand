import React,{useState} from 'react'
import ApiData from '../../../Api/data'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'

function Slider2(){
    const [slider2]=useState(ApiData)
 return(
    <div id="carouselExampleControls" className="carousel slide px-4" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active ">
        <div className="img d-flex justify-content-between">
          <div className="" style={{position: "relative"}}>
         <img src={slider2.Home.Slider2.sliderImg1} className=" " alt="" style={{width:"310px", height: "80vh",}}/>
         <button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
         <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>GULDAAN</h4>
                        <p style={{fontSize:"15px"}}>Rs 42,500</p>
                        </div>
          </div>
<div className="" style={{position: "relative"}}>
<img src={slider2.Home.Slider2.sliderImg2} className="ml-4" style={{width:"310px", height: "80vh",}} alt=""/>
<button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
<div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>JASHAN</h4>
                        <p style={{fontSize:"15px"}}>Rs 44,500</p>
                        </div>
</div>
        <div style={{position: "relative"}}>  
          <img src={slider2.Home.Slider2.sliderImg3} className="ml-4" style={{width:"310px", height: "80vh", }} alt=""/>
          <button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
          <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>SHIKAR GAH</h4>
                        <p style={{fontSize:"15px"}}>Rs 55,000</p>
                        </div>
        </div>
        <div  style={{position: "relative"}}>
          <img src={slider2.Home.Slider2.sliderImg4} className=" ml-4" style={{width:"310px", height: "80vh", }} alt=""/>
          <button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
          <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>HANS RAJ</h4>
                        <p style={{fontSize:"15px"}}>Rs 22,500</p>
                        </div>
        </div>
      </div>
    </div>  
      <div className="carousel-item">
        <div className=" d-flex justify-content-between">
          <div  style={{position: "relative"}}>
            <img src={slider2.Home.Slider2.sliderImg5} className=" " style={{width:"310px", height: "80vh", }} alt=""/>
            <button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
            <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>GULDAAN</h4>
                        <p style={{fontSize:"15px"}}>Rs 42,500</p>
                        </div>
          </div>
            <div  style={{position: "relative"}}>
            <img src={slider2.Home.Slider2.sliderImg6} className=" ml-4" style={{width:"310px", height: "80vh", }} alt=""/>
            <button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
            <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>GULDAAN</h4>
                        <p style={{fontSize:"15px"}}>Rs 42,500</p>
                        </div>
          </div>
            <div style={{position: "relative"}}>
            <img src={slider2.Home.Slider2.sliderImg7} className=" ml-4" style={{width:"310px", height: "80vh", }} alt=""/>
            <button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
            <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>GULDAAN</h4>
                        <p style={{fontSize:"15px"}}>Rs 42,500</p>
                        </div>
          </div>
            <div  style={{position: "relative"}}>
            <img src={slider2.Home.Slider2.sliderImg8} className=" ml-4"  style={{width:"310px", height: "80vh", }}alt=""/>
            <button className="px-3 py-2" style={{position:"absolute",top:"0px",right:"0px",border:"none",zIndex:"5",background:"green",color:"white"}}>VELVET EDIT</button>
            <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>GULDAAN</h4>
                        <p style={{fontSize:"15px"}}>Rs 42,500</p>
                        </div>
          </div>
           </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev" style={{width:"50px" , height:"50px" ,borderRadius:"50%",marginLeft:"1.3%",marginTop:"250px",color:"black",}}><FaAngleLeft/></button>
    <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next" style={{width:"50px" , height:"50px" ,borderRadius:"50%",marginRight:"1.3%",marginTop:"250px",color:"black"}}><FaAngleRight/></button>
  </div>
 )
}
export default Slider2