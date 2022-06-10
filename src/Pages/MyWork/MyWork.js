import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/img2.png';
import img2 from '../../images/img3.png';
import img3 from '../../images/img4.png';

const MyWork = () => {
    return (
        <div className='mb-20'>
            <h1 class="text-4xl font-bold text-primary mb-8">My Work</h1>
            <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div class="card card-compact w-full lg:w-96 px-5 lg:px-0  bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" className='h-64 w-full' /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl justify-center">Laptop Accessories</h2>

                        <Link class="btn btn-sm btn-outline btn-primary" to="/project1" >Project Detail</Link>

                        <p className='justify-start'>Using React, Tailwind, React routes, React hooks form,
                            Nodejs, Firebase authentication, React firebase hooks,
                            MongoDb , etc.</p>


                        <div class="card-actions justify-center">
                            <a href="https://laptop-parts-202a1.web.app/" target="blank"><button
                                class="btn btn-sm btn-outline btn-primary">Live Website</button> </a>
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-full lg:w-96 px-5 lg:px-0  bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" className='h-64 w-full' /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl justify-center">Gym House </h2>

                        <Link class="btn btn-sm btn-outline btn-primary" to="/project2" >Project Detail</Link>

                        <p className='justify-start'>
                            Using Reactjs, Bootstrap, React routes, React hooks form,
                            Nodejs, Firebase authentication, React firebase hooks,
                            MongoDb , etc.</p>


                        <div class="card-actions justify-center">

                            <a href="https://gym-service-5a99c.web.app/" target="blank"><button
                                class="btn btn-sm btn-outline btn-primary">Live Website</button> </a>
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-full lg:w-96 px-5 lg:px-0 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" className='h-64 w-full' /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl justify-center">Service Provider</h2>

                        <Link class="btn btn-sm btn-outline btn-primary" to="/project3" >Project Detail</Link>

                        <p className='justify-start'>
                            Using Reactjs, Bootstrap, React routes, Firebase
                            authentication, React firebase hooks, etc.
                        </p>


                        <div class="card-actions justify-center">

                            <a href="https://service-provider-48aa5.web.app/" target="blank"><button
                                class="btn btn-sm btn-outline btn-primary">Live Website</button> </a>
                        </div>
                    </div>

                </div >
            </div >
        </div>
    );
};

export default MyWork;