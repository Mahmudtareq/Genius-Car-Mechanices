import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully!')
               reset();
           }
        })
    }
    return (
        <div className="add-service">
            <h2> Please Add A Service</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 }) } Placeholder="Name"/>
                <textarea {...register("description")} Placeholder="Description"/>
                <input type="number" {...register("price")} Placeholder="Price"/>
                <input {...register("img")} Placeholder="Image"/>

                <input type="submit" />
                </form>

        </div>
    );
};

export default AddService;