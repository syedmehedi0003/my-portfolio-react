import React from 'react';
import mypic from '../../images/pic7.jpg';

const About = () => {
    return (
        <div class="lg:mb-20 mb-40">

            <div class="hero-content flex-col lg:flex-row h-96">

                <img src={mypic} class="max-w-sm   rounded-full lg:w-80 w-60 " />
                <div className='text-center lg:text-left px-0 lg:px-8'>
                    <h1 class="text-4xl font-bold text-primary mb-4">About My Self</h1>
                    <p class="py-2">I am Syed Mahade Hasan.
                        I have completed my B.sc in CSE degree from the Department of Computer Science and Engineering.</p>

                    <p class="py-2" >Now i am work for <span className='text-secondary'>Frontend Development</span></p>

                    <p> <b>Address:</b> Shahjahanpur, Dhaka</p>

                    <p class="py-2"><b>Email:</b> <a href="mailto: mehedihasanbahar@gmail.com" title="Click Here">mehedihasanbahar@gmail.com</a></p>
                    <p> <b>Phone:</b> <a href="tel: +8801877585632" title="Click Here"> 01877585632 (Skype / WhatsApp)</a></p>


                    {/* <p>I have good knowledge of HTML , CSS, Bootstrap, Tailwind, JavaScript, ES6, REST API, React, React Router, Node.js, MongoDB,  Firebase, Express.js.</p> */}

                    {/* <button class="btn btn-primary">Get Started</button> */}

                </div>
            </div>
        </div>
    );
};

export default About;