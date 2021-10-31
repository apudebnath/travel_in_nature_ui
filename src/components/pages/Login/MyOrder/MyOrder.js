import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';


const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    
    useEffect(() => {
        fetch('https://quiet-fjord-24073.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            const myOrders = data.filter(dt => dt.email === user.email)
            setOrders(myOrders);
            //setOrders(data)
        })
    }, [user.email]);

    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you Sure! you want to delete the Order?')
        if(proceed){
            fetch(`https://quiet-fjord-24073.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount > 0){
                alert('Order deleted Successfully.')
                const restOfOrders = orders.filter(order => order._id !== id)
                setOrders(restOfOrders);
            }
        });
    };
};
    return (
        <div className="container py-5" style={{minHeight: '100vh'}}>
            <h2>My Orders</h2>
            <div className="row pt-5 justify-content-center align-items-center">
                <div className="col-md-10 col-12 px-2">
                    <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Package</th>
                            <th>Status</th>
                            <th>Manage Order</th>
                          </tr>
                        </thead>
                        {
                            orders.map(order => <tbody>
                                <tr>
                                  <td>{order.name}</td>
                                  <td>{order.email}</td>
                                  <td>{order.packageName}</td>
                                  <th>{order.status}</th>
                                  <td><button onClick={() => handleOrderDelete(order._id)} className="border border-info bg-danger text-light rounded">Delete</button></td>
                                </tr>
                              </tbody>)
                        }
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;