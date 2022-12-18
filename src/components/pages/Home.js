import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [student, setstudent] = useState([]);

  useEffect(() => {
    loadstudents();
  }, []);

  const loadstudents = async () => {
    const result = await axios.get("http://localhost:8000/student");
    setstudent(result.data.reverse());
  };

  const deletestudents = async id => {
    await axios.delete(`http://localhost:8000/student/${id}`);
    loadstudents();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h3 className="text-center">List of students</h3>
        </div>
        <table class="table table-striped shadow  text-center">
          <thead class="thead-dark">
            <tr>
            <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((student, index) => (
              <tr>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.address}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>

                <td>
                  <Link class="btn btn-sm btn-info mr-2" to={`/student/list/${student.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-sm btn-secondary mr-2"
                    to={`/student/edit/${student.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-sm btn-danger"
                    onClick={() => deletestudents(student.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/add">Add New</Link>
        </div>
  );
};

export default Home;
