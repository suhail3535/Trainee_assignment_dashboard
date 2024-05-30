import React from 'react'
import { HashLoader } from 'react-spinners'
import { ThreeCircles } from 'react-loader-spinner'
import "./form.css"

const LoaderHome = () => {
  return (
    <div className="loader">
      {/* <HashLoader color="black" id='hash' size={100} /> */}
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="black"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h1 style={ {fontSize:"30px",color:"white"}}>Please Wait........</h1>

    </div>
  )
}

export default LoaderHome
