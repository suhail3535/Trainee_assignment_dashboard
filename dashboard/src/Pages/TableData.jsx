import React, { useState } from 'react';
import { Button, Table, Spin } from 'antd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./table.css";
import { useNavigate } from 'react-router-dom';

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
];

const columns = [
    {
        title: 'Sr.No',
        dataIndex: 'index',
        width: 80,
    },
    {
        title: 'Assignment Name',
        dataIndex: 'name',
    },
    {
        title: 'Trainee Name',
        dataIndex: 'sname',
        width: 130,
    },
    {
        title: 'Project Link',
        dataIndex: 'link',
        render: (text) => <a style={{ color: '#8884d8' }} href={text} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
        title: 'Github Link',
        dataIndex: 'github',
        render: (text) => <a style={{ color: '#8884d8' }} href={text} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        width: 150,
    },
];

const DataTable = ({ data }) => {
    const navigate=useNavigate()
    const [filterValue, setFilterValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 15; // Number of items per page
    const [loading, setLoading] = useState(false);

    const resetFilter = () => {
        setFilterValue("");
    }
    const handleMarks = () => {
    navigate("/marks")
    }
    const handleProject = () => {
        navigate("/project")
    }


    // Filter data based on filter value
    let filterData = filterValue ? data.filter((ele) => ele.sname === filterValue) : data;

    const modifiedData = filterData.map((item, index) => ({
        ...item,
        index: index + 1, // Calculate index starting from 1
    })).slice((currentPage - 1) * pageSize, currentPage * pageSize); // Apply pagination

    // Calculate total projects submitted by each trainee
    const totalProjectsData = {};
    data.forEach((item) => {
        totalProjectsData[item.sname] = (totalProjectsData[item.sname] || 0) + 1;
    });
    const totalProjectsChartData = Object.keys(totalProjectsData).map((key) => ({
        name: key,
        projects: totalProjectsData[key],
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
                <Button onClick={resetFilter} type="primary">
                    {filterValue ? 'Reset Filter' : 'Filter Data'}
                </Button>
                {data && (
                    <div style={{ marginBottom: '0px' }}>Total Projects Submitted : {data.length}</div>
                )}
                <Button onClick={handleMarks} type='primary'>Students Marks</Button>
                <Button onClick={handleProject} type='primary'>Live Projects</Button>
            </div>


            {filterValue && (
                <div style={{ marginBottom: '10px' }}>Total Assignment of {filterValue}: {filterData.length}</div>
            )}




            <ResponsiveContainer className="bar" width="100%" height={300}>
                <BarChart
                    data={filterValue ? totalProjectsChartData.filter(item => item.name === filterValue) : totalProjectsChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="projects" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            {loading ? (
                <Spin size="large" />
            ) : (
                <Table
                    columns={columns}
                    dataSource={modifiedData}
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        total: filterData.length,
                        onChange: (page) => setCurrentPage(page),
                    }}
                    scroll={{ y: 400 }}
                    rowKey={(record, index) => index + 1 + (currentPage - 1) * pageSize} // Specify row key
                />
            )}
        </div>
    );
};

export default DataTable;
