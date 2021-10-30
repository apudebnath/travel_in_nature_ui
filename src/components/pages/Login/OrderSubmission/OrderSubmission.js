import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './OrderSubmission.css';
import axios from 'axios';
import useAuth from '../../../../Hooks/useAuth';


const OrderSubmission = () => {
    const {packageId} = useParams();
    const {user, email} = useAuth();
    const [pack, setPack] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
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
    }, [])

    return (
        <div className="py-5 h-100">
            <h2>Please Submit Your Order</h2>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8 p-3 border border-info rounded my-5 mx-3">
                    <div className="row">
                        <h2 className="pb-3">{pack.title}</h2> 
                        <div className="col-md-6">
                        <img className="img-fluid" src={pack.img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <p>{pack.description}</p>
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
                            <div className="register">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.name} {...register("name", { required: true})} placeholder="Name" />
                                <input defaultValue={user.email} {...register("email", { required: true})} placeholder="Email" />
                                <input {...register("packageName", { required: true})} placeholder="Please write the Package-Name" />
                                <input {...register("city", { required: true})} placeholder="City" />
                                <input className="text-success fw-bold" type="submit" value="Place an Order"/>
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