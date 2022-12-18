import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const List = () => {
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    address: "",  
    gender: "",
    email: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const res = await axios.get(`http://localhost:8000/student/${id}`);
    setStudent(res.data);
  };
  return (
    <div className="container py-4">   
      <table className="table shadow table-striped">
          <thead className="bg-dark text-light">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.address}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary mb-2" to="/">
        back
      </Link>
    </div>
  );
};

export default List;
