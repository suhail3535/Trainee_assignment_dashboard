import React, { useState } from 'react';
import { Button, Table } from 'antd';
import "./table.css"

const options = [
    { value: 'Sunil Kumar', label: 'Sunil Kumar' },
    { value: 'Ramu Singh', label: 'Ramu Singh' },
    { value: 'Manjeet Singh', label: 'Manjeet Singh' },
    { value: 'Manish Yadav', label: 'Manish Yadav' },
    { value: 'Manoj gurjar', label: 'Manoj gurjar' },
    { value: 'Sohan Lal jat', label: 'Sohan Lal jat' },
    { value: 'SevaRam', label: 'SevaRam' },
    { value: 'Rajendra Koli', label: 'Rajendra Koli' },
    { value: 'Mukesh jat', label: 'Mukesh jat' },
    { value: 'SitaRam', label: 'SitaRam' },
    { value: 'Mohit', label: 'Mohit' },
    { value: 'Suresh Kumar', label: 'Suresh Kumar' },
    { value: 'Suresh Raigar', label: 'Suresh Raigar' },
    { value: 'Vikas Kumar', label: 'Vikas Kumar' },
    { value: 'Ashok Kumar', label: 'Ashok Kumar' },
]
const columns = [
    {
        title: 'Sr.No',
        dataIndex: 'index',
        width: 100,
    },
    {
        title: 'Assignment Name',
        dataIndex: 'name',
    },
    {
        title: 'Trainee Name',
        dataIndex: 'sname',
    },
    {
        title: 'Project Link',
        dataIndex: 'link',
        render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
        title: 'Github Link',
        dataIndex: 'github',
        render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
];

const DataTable = ({ data }) => {
    const [filterValue, setFilterValue] = useState("");

    const resetFilter = () => {
        setFilterValue("")
    }

    // Filter data based on filter value
    let filterData = filterValue ? data.filter((ele) => ele.sname === filterValue) : data;
    console.log(filterData);

    const modifiedData = filterData.map((item, index) => ({
        ...item,
        index: index + 1, // Adding 1 to make serial number start from 1
    }));

    return (
        <div className='table_container'>



            <div className='select_value'>
                <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
                    <option value="">Select Trainee</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <Button onClick={resetFilter} type="primary" >Reset</Button>
                {data&&(
                    <div style={{ marginBottom: '0px' }}>Total Projects Submitted : {data.length}</div>
                )}
            </div>
            {filterValue && (
                <div style={{ marginBottom: '10px' }}>Total Assignment of {filterValue}: {filterData.length}</div>
            )}
            <Table
                columns={columns}
                dataSource={modifiedData}
                pagination={{
                    pageSize: 50,
                }}
                scroll={{
                    y: 400,
                }}
            />
        </div>
    );
};

export default DataTable;
