import React from 'react';
import img1 from '../../images/Project3/img1.png';
import img2 from '../../images/Project3/img2.png';
import img3 from '../../images/Project3/img3.png';

const Project3 = () => {
    return (


        <div className='mt-12 mb-8'>
            <h2 class="text-2xl justify-center font-bold mb-5">Service Provider</h2>
            <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div class="card card-compact w-full lg:w-96 px-5 lg:px-0  bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" className='h-64 w-full' /></figure>
                    <h2 class="card-title  justify-center pb-4">This is Home page</h2>

                </div>

                <div class="card card-compact w-full lg:w-96 px-5 lg:px-0  bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" className='h-64 w-full' /></figure>
                    <h2 class="card-title  justify-center pb-4">This is Login page</h2>

                </div>


                <div class="card card-compact w-full lg:w-96 px-5 lg:px-0  bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" className='h-64 w-full' /></figure>
                    <h2 class="card-title  justify-center pb-4">This is Services Page</h2>

                </div>

            </div>


            <div className=" px-10">
                <p class="text-2xl  font-bold my-5">Features</p>


                <div className='text-left lg:flex lg:justify-between'>
                    <div>
                        <p class="text-xl  my-5">For User : </p>
                        <p>1. User can Login Here <br />
                            2. User can see Services, Blog and About those pages<br />
                            3. User can Book a service but must be Login first<br />
                            4. User can Login or Signup using Email and password or using Google
                        </p>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default Project3;