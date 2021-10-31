import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './OrderSubmission.css';
import axios from 'axios';
import useAuth from '../../../../Hooks/useAuth';


const OrderSubmission = () => {
    const {packageId} = useParams();
    const {user} = useAuth();
    const [pack, setPack] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status= "Pending";
        axios.post('https://quiet-fjord-24073.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId)
            alert("Order submitted Successfully.")
        })
        reset();  
    };

    useEffect(() => {
        fetch(`https://quiet-fjord-24073.herokuapp.com/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setPack(data))
    }, [packageId])


    return (
        <div className="py-5 h-100 container-fluid">
            <h2>Please Submit Your Order</h2>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8 p-3 border border-info rounded my-5 mx-3">
                    <div className="row">
                        <h2 className="pb-3">{pack.title}</h2> 
                        <p>{pack.description}</p>
                        <div className="col-md-6">
                        <img className="img-fluid" src={pack.img} alt="" />
                        </div>
                        <div className="col-md-6 pt-3">
                            <Table striped bordered hover>
                                <tbody>
                                  <tr>
                                    <td><h5 style={{color: 'orchid'}}>Duration: {pack.duration}</h5></td>
                                    <td><h5 style={{color: 'orchid'}}>Person: {pack.person}</h5></td>
                                  </tr>
                                  <tr>
                                    <td><h5 style={{color: 'orchid'}}>Date: {pack.date}</h5></td>
                                    <td><h5 style={{color: 'steelblue'}}>Price: ${pack.price}</h5></td>
                                  </tr>
                                </tbody>
                            </Table>
                            <div className="register pt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name", { required: true})} placeholder="Name" />
                                <input defaultValue={user.email} {...register("email", { required: true})} placeholder="Email" />
                                <input defaultValue={pack.title}{...register("packageName", { required: true})} placeholder="Package-Name" />
                                <input {...register("city", { required: true})} placeholder="Your City" />
                                <input {...register("address", { required: true})} placeholder="Your Address" />
                                <input className="text-success fw-bold fs-5" type="submit" value="Place a Booking"/>
                            </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderSubmission;