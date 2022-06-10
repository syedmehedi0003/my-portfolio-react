import React from 'react';
import img1 from '../../images/Project/img1.png';
import img2 from '../../images/Project/img2.png';
import img3 from '../../images/Project/img3.png';

const Project1 = () => {
    return (


        <div className='mt-12 mb-8'>
            <h2 class="text-2xl justify-center font-bold mb-5">Laptop Accessories</h2>
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
                    <h2 class="card-title  justify-center pb-4">This is DashBoard</h2>

                </div>

            </div>


            <div className=" px-10">
                <p class="text-2xl  font-bold my-5">Features</p>


                <div className='text-left lg:flex lg:justify-between'>
                    <div>
                        <p class="text-xl  my-5">For User : </p>
                        <p>1. User must Login here for buy Product <br />
                            2. User can SignUp here by Email and password or using Google<br />
                            3. User can Update his/her information <br />
                            4. User can see his/her information <br />
                            5. User can give a feedback or review <br />
                            6. Without Login or Signup user just see the home page

                        </p>
                    </div>

                    <div>
                        <p class="text-xl  my-5">For Admin : </p>
                        <p>1. Admin must Login Here<br />
                            2. Admin can make a Admin<br />
                            3. Admin can add, delete and update Product<br />
                            4. Admin can see all orders<br />
                            5. Admin can see all User<br />
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Project1;