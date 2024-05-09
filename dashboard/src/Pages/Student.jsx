import React, { useEffect, useState } from 'react'
import axios from "axios";

import DataTable from './TableData';

const Student = () => {
    const [data, setData] = useState([])

    const getdata = async () => {
        try {
            let res = await axios.get("http://localhost:8080/student")
            console.log(res.data);
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <DataTable data={data} />

        </div>
    )
}

export default Student
