import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';
import {Table} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Body from './Body';

const {Provider, Consumer} = createContext('en');
export default function App() {
    const [employees, setEmployees] = useState([]);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4NTQwNzE4NywiZXhwIjoxNTg1NDEwNzg3LCJuYmYiOjE1ODU0MDcxODcsImp0aSI6IlhtVDl3Y2czaTRWempEaTMiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gefXIlZvv9sEeIdH13GvXDToWyYelMfVhm0QQ65oZ48';
    useEffect(() => {
        axios.get(`http://localhost:8000/api/employees`,
            {
                headers: {
                    Authorization : `Bearer ${token}` ,
                    'Content-Type' : 'application/json'
                },
            })
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
        <Provider value="id">
            <Table dataSource={employees} columns={columns}/>;
            <Body/>
        </Provider>
    );
}
