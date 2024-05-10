import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Spin } from 'antd';
import Loader from './Loader';

import DataTable from './TableData';


const Student = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);


    const getdata = async () => {
        try {
            let res = await axios.get("https://trainee-assignment-dashboard.vercel.app/student")
            console.log(res.data);
            setData(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            {loading ? (
                <Loader />

            ) : (<DataTable data={data} />
            )}
        </div>
    )
}

export default Student
