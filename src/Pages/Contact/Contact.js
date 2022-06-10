import React from 'react';

const Contact = () => {
    return (
        <div class="hero h-96 mb-64 lg:mb-20 ">
            <form action="mailto:mehedihasanbahar@gmail.com" method="POST">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="text-center lg:text-left">
                        <h1 class="text-4xl font-bold text-primary">Contact Me</h1>
                        <p class="py-6">I am a Frontend Web Developer.Contact with me, Or you can share your feedback.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea type="text" placeholder="Message" class="input input-bordered" />
                            </div>



                            <div class="form-control mt-6">
                                <button class="btn btn-outline btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;