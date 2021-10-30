import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import Header from '../Header/Header';
import Package from '../Package/Package';

const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="info" />
    }
    return (
        <div>
            <Header></Header>
            <Package></Package>
        </div>
    );
};

export default Home;