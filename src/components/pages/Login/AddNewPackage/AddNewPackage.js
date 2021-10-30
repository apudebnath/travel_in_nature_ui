import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewPackage.css';

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://quiet-fjord-24073.herokuapp.com/packages', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your Package Inserted Successfully.')
            }
        })
        reset();
    };

    return (
        <div className="addpackage">
            <h2>Add New Package</h2>
            <div className="row justify-content-center pt-3 ">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("title", { required: true,})} placeholder="Title" />
                        <textarea {...register("description", { required: true,})} placeholder="Description"/>
                        <input {...register("img", { required: true,})} placeholder="image URL"/>
                        <input {...register("duration", { required: true,})} placeholder="Duration (days)" />
                        <input {...register("food", { required: true,})}  placeholder="Food (include/exclude)" />
                        <input type="number" {...register("person",{ required: true,})} placeholder="Person(one or ...)" />
                        <input type="number" {...register("price",{ required: true,})} placeholder="Price" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewPackage;