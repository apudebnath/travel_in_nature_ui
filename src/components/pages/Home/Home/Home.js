import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import BestSpots from '../BestSpots/BestSpots';
import HappyClients from '../HappyClients/HappyClients';
import Header from '../Header/Header';
import Package from '../Package/Package';
import TravelInfo from '../TravelInfo/TravelInfo';

const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="info" />
    }
    return (
        <div>
            <Header></Header>
            <Package></Package>
            <TravelInfo></TravelInfo>
            <HappyClients></HappyClients>
            <BestSpots></BestSpots>
        </div>
    );
};

export default Home;