import React from 'react'
import "./index.scss"
const NadFooter = () => {
  return (
    <div id='nad'>
      <div className="container">
        <div className="nad">
            <p>Want to make a difference?</p>
            <h2>Start a petition for…</h2>
            <div className="">
                <div className="block1">
                    <h2>Myself or my family</h2>
                    <button>Get started</button>
                </div>
                <div className="block2">
                <h2>My local community</h2>
                    <button>Get started</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NadFooter
