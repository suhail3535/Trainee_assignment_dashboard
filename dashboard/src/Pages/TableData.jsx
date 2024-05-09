import React, { useState } from 'react';
import { Table } from 'antd';
import "./table.css"

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
    const [searchTerm, setSearchTerm] = useState('');

    // Filter data based on filter value
    let filterData = filterValue ? data.filter((ele) => ele.name === filterValue) : data;
console.log(filterData);
    // Filter data based on search term
    const filteredUsers = filterData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Modify filtered data to add serial number
    const modifiedData = filteredUsers.map((item, index) => ({
        ...item,
        index: index + 1, // Adding 1 to make serial number start from 1
    }));

    return (
        <div className='table_container'>
            <div className='select_value'>
                <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)} name="" id="">
                    <option value="">Select</option>
                    <option value="Ramu">Ramu</option>
                    <option value="Sunil Kumar">Sunil Kumar</option>
                    <option value="Manjeet Singh">Manjeet Singh</option>
                </select>
            </div>
            <input
                type="text"
                placeholder="Search by username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
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
