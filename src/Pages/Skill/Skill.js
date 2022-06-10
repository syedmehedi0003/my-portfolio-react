import React from 'react';
// import Html from '../../images/html.png';
// import Css from '../../images/css.png';
// import Js from '../../images/js.png';
// import react from '../../images/react.jpg';


const Skill = () => {
    return (
        <div class="mb-20">
            <h1 class="text-4xl font-bold text-primary mb-6">My Skills</h1>
            <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>


                {/* <div class="card w-48 h-32  bg-base-100 shadow-xl">
                    <figure class="px-4 pt-4">
                        <img src={Css} alt="html" class="rounded-xl w-16" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                    </div>
                </div> */}

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80   h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Html</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="80" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80 h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Css</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="70" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Bootstrap</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="70" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Tailwind</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="70" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">JavaScript</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="70" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">React</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="60" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Node Js</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="60" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Mongo Db</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="60" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Api</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="60" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0  lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Github</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="60" max="100"></progress>
                    </div>
                </div>


                <div class="card w-4/5 mx-10 lg:mx-0  lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">Firebase</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="60" max="100"></progress>
                    </div>
                </div>

                <div class="card w-4/5 mx-10 lg:mx-0 lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">React Router</p>
                        <progress class="progress progress-warning w-3/4 lg:w-64" value="60" max="100"></progress>
                    </div>
                </div>


                {/* <div class="card w-full lg:w-80  h-20  bg-base-100 shadow-xl">
                    <div class="items-center text-center">
                        <p className="font-bold text-2xl">React Router</p>
                        <progress class="progress progress-warning w-64" value="60" max="100"></progress>
                    </div>
                </div> */}




            </div>
        </div>
    );
};

export default Skill;