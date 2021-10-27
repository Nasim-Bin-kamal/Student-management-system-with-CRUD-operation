import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, Container, Form, ProgressBar, Toast } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateStudent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/students/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data));
    }, [id]);

    const handleNameChange = (e) => {
        // const updatedName = e.target.value;
        const updatedStudent = { ...student };
        updatedStudent.name = e.target.value;
        setStudent(updatedStudent);
    }
    const handleEmailChange = (e) => {
        const updatedStudent = { ...student };
        updatedStudent.email = e.target.value;
        setStudent(updatedStudent);
    }
    const handlePhoneChange = (e) => {
        const updatedStudent = { ...student };
        updatedStudent.phone = e.target.value;
        setStudent(updatedStudent);
    }
    const handleStudentIdChange = (e) => {
        const updatedStudent = { ...student };
        updatedStudent.studentId = e.target.value;
        setStudent(updatedStudent);
    }

    const handleUpdateStudent = (e) => {
        e.preventDefault();

        const url = `http://localhost:5000/students/${id}`;
        axios.put(url, student)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    setStudent({});
                }
            });
    }
    return (
        <div>
            <Container>
                <h2 className="text-center my-3">Update the information</h2>
                <Form className="d-flex flex-column mx-auto my-5 w-50 bg-warning p-3 rounded-3 shadow-sm" onSubmit={handleUpdateStudent}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control onChange={handleNameChange} type="text" value={student?.name || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" value={student?.email || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={handlePhoneChange} type="tel" value={student?.phone || ''} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Student Id</Form.Label>
                        <Form.Control onChange={handleStudentIdChange} type="text" value={student?.studentId || ''} />
                    </Form.Group>
                    <Button className="mt-3 w-50 mx-auto" type="submit">Update</Button>
                </Form>

            </Container>
        </div>
    );
};

export default UpdateStudent;