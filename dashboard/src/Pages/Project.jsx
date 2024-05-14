import React, { useEffect, useState } from 'react';
import { Button, Input, Table } from 'antd';
import axios from 'axios';
import Loader from './Loader';

import './table.css';
import { useNavigate } from 'react-router-dom';

const api = 'https://trainee-assignment-dashboard.vercel.app/project/addproject';
const api2 = 'https://trainee-assignment-dashboard.vercel.app/project';
// const api2 = "http://localhost:8080/project"
// const api = "http://localhost:8080/project/addproject"
const columns = [
    {
        title: 'Months',
        dataIndex: 'name',
        render: (text) => <span>{text}</span>,
    },
    {
        title: 'Marks Link',
        dataIndex: 'link', // Assuming 'link' is the key for the input field value
        render: (text) => <a href={text} style={{ color: 'blue' }} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
];

const Project = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const handleSubmit = () => {
        if (!inputValue.trim() || !selectValue.trim()) {
            alert("Please fill in both Marks URL and Project Month");
            return;
        }

        const newData = {
            name: selectValue,
            link: inputValue,
        };
        const updatedData = [...tableData, newData];
        setTableData(updatedData);
        setInputValue('');
        setSelectValue('');

        axios.post(api, newData)
            .then(response => {
                console.log('Marks added successfully!');
                alert("Marks added successfully!");
            })
            .catch(error => {
                console.error('Error adding marks:', error);
            });
    };

    const handleProject = () => {
        navigate("/marks")
    }
    const handleProject1 = () => {
        navigate("/record")
    }
    const getdata = async () => {
        try {
            let res = await axios.get(api2)
            console.log(res.data);
            setTableData(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata()
    }, [])
    console.log(tableData);
    return (
        <>
            <div className='fields_container'>
                Marks Url:
                <Input
                    placeholder='Paste Url'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                Project Month:
                <select
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                >
                    <option value=''>Select</option>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December 2023'>December 2023</option>
                    <option value='December'>December</option>
                </select>
                <Button type='primary' onClick={handleSubmit}>
                    Submit
                </Button>
                <Button type='primary' onClick={handleProject}>
                    Exam Marks
                </Button>
                <Button type='primary' onClick={handleProject1}>
                    Admin
                </Button>
            </div>
            <h1 style={{ textAlign: "center", marginTop: "20px",fontSize:"20px" }}>All Live Projects Links Details</h1>

            {loading ? (
                <Loader />

            ) : (
                <Table
                    className='marks_table'
                    columns={columns}
                    dataSource={tableData}
                    bordered
                />
            )}

        </>
    );
};

export default Project;
