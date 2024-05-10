import { Spin } from 'antd'
import React from 'react'

const Loader = () => {

    return (
        <div style={{ width: "50%", margin: " 120px auto",textAlign:"center"}}>
            <Spin size="large" />
        </div>
    )
}

export default Loader
