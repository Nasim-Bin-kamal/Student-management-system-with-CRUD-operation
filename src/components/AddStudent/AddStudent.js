import axios from 'axios';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddStudent.css';

const AddStudent = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/students', data)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    alert('Student Added Successfully');
                    reset();
                }
            });
    };
    console.log(errors);
    return (
        <Container>
            <div>
                <h2 className="text-center mx-auto mt-5 pt-5">Add a student</h2>
                <form className="d-flex flex-column mx-auto my-5 w-50 bg-info p-3 rounded-3 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border border-2 rounded-3 p-1 my-2" type="text" placeholder="Full name" {...register("name", { required: true, maxLength: 80 })} />
                    <input className="border border-2 rounded-3 p-1 my-2" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input className="border border-2 rounded-3 p-1 my-2" type="tel" placeholder="Mobile number" {...register("phone", { required: true, maxLength: 12 })} />
                    <input className="border border-2 rounded-3 p-1 my-2" type="text" placeholder="Student Id" {...register("studentId", { required: true, maxLength: 10 })} />

                    <Button className="mt-3" type="submit" variant="success">Submit</Button>
                </form>
            </div >
        </Container>
    );
};

export default AddStudent;