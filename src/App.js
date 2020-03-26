import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [employees,setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/employees`)
      .then(res => {
        console.log(res.data)
        setEmployees(res.data)
      })
  },[]);

  return (
    <div className="App">
      <table className="table table-stripped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data, key) => {
            return(
            <tr key={key}>
              <td>{data.name}</td>
              <td>{data.id_jobs}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td></td>
            </tr>
            )
          })}
        
        </tbody>
      </table>
    </div>
  );
}