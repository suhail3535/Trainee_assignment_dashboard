import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Table } from 'antd';
import TableData from './TableData';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
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
            <TableData data={data} />

        </div>
    )
}

export default Student
