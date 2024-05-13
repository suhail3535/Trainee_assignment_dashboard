import React from 'react';
import "./nav.css";
import { Dropdown, Menu, Space } from 'antd'; // Import Menu from 'antd'
import { FaRegUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/l.png";

const Navbar = () => {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    if (key === "Logout") {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="Admin">Admin</Menu.Item>
      <Menu.Item key="Logout">Home</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className='nav'>
        <div>
          <Link to={"/"}>
            <img className='logo_khan' src={logoImg} alt="" />
          </Link>
        </div>
        <div className='heading_div'>
          <div id="heading">
            <h2>Welcome to Assignment Management System</h2>
          </div>
        </div>
        <div className='user'>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Space>
                <FaRegUserCircle />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
