import { Spin } from 'antd'
import React from 'react'

const Loader = () => {

    return (
        <div style={{ width: "50%", margin: " 120px auto",textAlign:"center"}}>
            <Spin size="large" />
            <h1 style={{textAlign: "center", marginTop: "10px"}}>Please Wait or Refresh Page.........</h1>

        </div>
    )
}

export default Loader
