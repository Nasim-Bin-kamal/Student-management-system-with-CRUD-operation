import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Students.css';

const Students = () => {
    const [students, setStudents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, []);

    //Update student info
    const handleUpdateStudent = (id) => {
        history.push(`/student/update/${id}`);
    }

    //delete a student 
    const handleDeleteStudent = (id) => {
        const proceed = window.confirm('Are you want to delete this student');
        if (proceed) {
            const url = `http://localhost:5000/students/${id}`;
            axios.delete(url)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingStudents = students?.filter(student => student._id !== id);
                        setStudents(remainingStudents);
                    }
                })
        }
    }
    return (
        <div>
            <Container>
                <div>
                    <h2 className="text-center mx-auto my-3 pt-3">Total Enrolled Students: {students?.length}</h2>
                </div>
                <div className="mx-auto my-5">
                    <Table striped bordered hover responsive>
                        <thead className="text-center">
                            <tr>
                                <th>Serial Id</th>
                                <th>FUll Name</th>
                                <th>Email Address</th>
                                <th>Phone Number</th>
                                <th>Student Id</th>
                                <th>Update/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students?.map(student => <tr key={student._id}>
                                    <td>{student?._id}</td>
                                    <td>{student?.name}</td>
                                    <td>{student?.email}</td>
                                    <td>{student?.phone}</td>
                                    <td>{student?.studentId}</td>
                                    <td className="text-center">
                                        <i onClick={() => handleUpdateStudent(student?._id)} className="fas fa-user-edit me-2 px-2 text-warning"></i>
                                        <i onClick={() => handleDeleteStudent(student?._id)} className="fas fa-trash-alt ms-2 px-2 text-danger"></i></td>

                                </tr>)
                            }


                        </tbody>
                    </Table>
                </div>
            </Container>


        </div>
    );
};

export default Students;