import React,{useState} from 'react'
import ApiData from '../../../Api/data'
function Brides() {
    const [brides]=useState(ApiData)
    return (
        <div className=' px-2'>
        <div className='px-4 pt-4'>
            <h1 className=' text-center' style={{letterSpacing:"4px"}}>WARDHA SALEEM BRIDES</h1>
        </div>
        <div className='mt-5 d-flex flex-wrap justify-content-between' style={{width:"100%",height:"auto"}}>
        {
            brides.Brides.map(e=>{
                return <div className='px-3 col-lg-4 col-md-6 col-12' style={{height:"auto",display:"grid",}}>
                    <div className='border g-grid imgParents'>
                        <img src={e.productImg1} style={{position:"relative"}} className='w-100 border' alt="" srcset="" />
                        </div>
                        <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>{e.productName}</h4>
                        <button className="mt-3 py-2 px-5" style={{background:"black",color:"white",border:"none",outline:"none"}}>INQUIRE NOW</button>
                        </div>
                    </div>
            })
        }
        </div>
        </div>
    )
}

export default Brides
