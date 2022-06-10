import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyWork from '../MyWork/MyWork';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <MyWork></MyWork>
            <Contact></Contact>
        </div>
    );
};

export default Home;