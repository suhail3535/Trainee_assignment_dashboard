import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Spin } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoadingOutlined } from '@ant-design/icons'
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
// const api = "http://localhost:8080/student/add"
const api = "https://trainee-assignment-dashboard.vercel.app/student/add"
const VehicleInfoForm = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleFormSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post(api, values);
            setLoading(false);
            toast.success("Thank you for submitting your assignment!");

            form.resetFields(); // Reset form fields after successful submission
        } catch (error) {
            setLoading(false);
            console.error('Error:', error);
            toast.error("Failed to submit data!");
        }
    };

    return (
        <>
            <div className='main_form'>
                <div className='main_container_forms_vehi'>
                    <Form
                        form={form}
                        onFinish={handleFormSubmit}
                        name="combinedForm"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <div className='vehiinput'>
                            <Form.Item label="Assignment Name" name="name" rules={[{ required: true, message: 'Please enter Assignment Name!' }]}>
                                <Input placeholder='Enter your name' />
                            </Form.Item>

                            <Form.Item label="Trainee Name" name="sname" rules={[{ required: true, message: 'Please Select your Name' }]}>
                                <Select showSearch placeholder="Select your name" options={options} />
                            </Form.Item>
                        </div>

                        <div className='vehiinput'>
                            <Form.Item label="Project Link" name="link" rules={[{ required: true, message: 'Please submit Netlify link!' }]}>
                                <Input placeholder='Netlify Link' />
                            </Form.Item>

                            <Form.Item label="Github Link" name="github">
                                <Input placeholder='Github Link' />
                            </Form.Item>
                            <Form.Item label="Project Description (Check what's App group for it)" name="description" rules={[{ required: true, message: 'Please submit project Description!' }]}>
                                <Input placeholder='Description' />
                            </Form.Item>

                        </div>

                        <div className='vehiinput'>
                            <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select date!' }]}>
                                <DatePicker  />
                            </Form.Item>
                        </div>

                        <div className='add'>
                            <Form.Item>
                                <button htmlType="submit" disabled={loading}>
                                    {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Submit'}
                                </button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
                <ToastContainer />
            </div>

        </>
    );
}

export default VehicleInfoForm;
