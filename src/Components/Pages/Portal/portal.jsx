import React,{useState} from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
import FilterLogo from '../../../images/filter.png'
import ApiData from '../../../Api/data'

function Portal() {
    const [porter]=useState(ApiData)
    return (
        <div className=' px-2'>
        <div className='pt-5 px-3'>
            <p className='pt-2' style={{color:"#6f6f6f"}}>HOME <span className='ml-2'> <AiFillCaretRight/> </span><span className='ml-2 pb-1' style={{color:"black",borderBottom:"1px solid black"}}>PRET-A-PORTER</span></p>
            <div className='pt-3' style={{height:"6vh"}}>
                <img src={FilterLogo} alt="filter-logo"/>
                <p className='ml-3' style={{fontSize:"14px",fontWeight:"500",display:"inline-block"}}>REFINE SEARCH</p>
                <div className='border-bottom' style={{width:"170px"}}></div>
            </div>
        </div>
        <div className='mt-5 d-flex flex-wrap justify-content-between' style={{width:"100%",height:"auto"}}>
        {
            porter.Porter.map(e=>{
                return <div className='px-3 col-lg-4 col-md-6 col-12' style={{height:"auto",display:"grid",}}>
                    <div className='border g-grid imgParents'>
                        <img src={e.productImg1} style={{position:"relative"}} className='w-100 border' alt="" srcset="" />
                        <img src={e.productImg2} style={{position:"absolute",top:"0px",left:"0px",width:"94.5%",zIndex:"3"}} className='border ml-3 imgHover' alt="" srcset="" />
                        <button className='px-2 py-3 w-100' style={{background:"white",border:"none"}}>VIEW DETAIL</button>
                        </div>
                        <div className='text-center pt-4 mb-5'>
                        <h4 style={{fontSize:"17px"}}>{e.productName}</h4>
                        <p style={{fontSize:"15px"}}>{e.productPrice}</p>
                        </div>
                    </div>
            })
        }
        </div>
        </div>
    )
}

export default Portal
