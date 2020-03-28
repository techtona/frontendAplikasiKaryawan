import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

export default function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/employees`)
            .then(res => {
                console.log(res.data);
                setEmployees(res.data)
            })
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div className="App">
            <Table dataSource={employees} columns={columns}/>;
        </div>
    );
}
