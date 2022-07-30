import React from 'react';
import Banner from './Banner';
import Tools from '../Tools/Tools';
import Summary from '../summary/Summary';
import Revews from '../revew/Revews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Revews></Revews>
        </div>
    );
};

export default Home;