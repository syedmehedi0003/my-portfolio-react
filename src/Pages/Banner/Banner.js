import React from 'react';
import Bannerpic from '../../images/Capture.PNG';
import './Banner.css';

const Banner = () => {
    return (
        <div class="hero h-96 bg-base-200 text-white mt-4 lg:mb-20 mb-40" style={{
            background: `url(${Bannerpic})`,

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(15, 10, 10, 0.8)'

        }}>
            <div class="hero-content text-center ">
                <div class="max-w-md ">


                    {/* <h1 class="lg:text-3xl text-xl font-bold">Hi, I am Syed Mahade Hasan</h1> */}

                    <div class="typing-demo">
                        <h1 class="lg:text-3xl text-xl font-bold">Hi, I am Syed Mahade Hasan</h1>
                    </div>

                    <hr className='lg:w-xl my-2' style={
                        {
                            border: '1px solid white',
                            margin: 'mx auto'

                        }
                    } />
                    <p className="text-xl mb-2">Web designer and developer</p>

                    <a href="https://drive.google.com/file/d/13Cs5GKvfp5BCTyaLrdvvjP0mzaE2Bmr4/view?usp=sharing" target="blank"><button
                        class="btn btn-sm btn-outline btn-primary" title="Click Here">My Resume</button> </a>


                </div>
            </div>
        </div >
    );
};

export default Banner;