import React,{useState} from 'react'
import ApiData from '../../../Api/data'

function PreNavbar() {
    const [preNavbar]=useState(ApiData)
    return (
        <div className='preNav py-2 text-white text-center'>
            {
                preNavbar.preNav.map(e=>{
                    return  <a href="#edition" className="text-white">{e.edition}<span className='mx-1'>:</span><span>{e.shop}</span></a>
                            
                })
            }
        </div>
    )
}

export default PreNavbar
