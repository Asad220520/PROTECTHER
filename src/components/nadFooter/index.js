import React from 'react'
import "./index.scss"
import fut from "../../image/fut.png"
const NadFooter = () => {
  return (
    <div id='nad'>
     <div className="bg">
     <div className="container">
        <div className="nad">
            <p className='p'>Want to make a difference?</p>
            <h2 className='h2'>Start a petition for…</h2>
            <div className="nad--group justify-between flex py-10">
                <div className="block1">
                    <img width={380} src={fut} alt="img" />
                    <h2>Myself or my family</h2>
                    <button>Get started</button>
                </div>
                <div className="block2">
                    <img height={250} src={fut} alt="img" />
                <h2>My local community</h2>
                    <button>Get started</button>
                </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default NadFooter
