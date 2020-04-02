import React, {useState, useEffect, createContext, useRef} from 'react';
import axios from 'axios';
import {Table} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Body from './Body';

const {Provider, Consumer} = createContext('en');
export default function App() {
    const [employees, setEmployees] = useState([]);
    let email = useRef(null);
    let password = useRef(null);

    useEffect(() => {
        let token = sessionStorage.getItem('aplikasi_karyawan_token');
        axios.get(`http://localhost:8000/api/employees`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                console.log(res.data);
                setEmployees(res.data);
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

    const handleLogin = (e) =>{
        e.preventDefault();
        let body = {
            email : email.current.value,
            password : password.current.value
        };

        axios.post(`http://localhost:8000/api/auth/login`, body,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                console.log(res.data);
                sessionStorage.setItem('aplikasi_karyawan_token',res.data.access_token)
                console.log("login sukses")
            })
        return;
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="text" ref={ email } placeholder="email"/>
                <input type="password" ref={ password } placeholder="password"/>
                <button type="submit">login</button>
            </form>
            <Provider value="id">
                <Table dataSource={employees} columns={columns}/>
                <Body/>
            </Provider>
        </>
    );
}
