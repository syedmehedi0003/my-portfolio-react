import React from 'react';
import './Footer.css';

const Footer = () => {
    return (



        <footer>
            <div className='items-center justify-center py-8 text-white'>
                <h3 className='text-xl font-bold'>Syed Mahade Hasan</h3>
                <div className="footer-desc pb-5">
                    <p className='text-sm'>Copyright &copy;2022 - All right reserved</p>
                </div>

                <p className='text-lg text-center'>
                    <i class="fab fa-instagram social mr-2 text-red-700"></i>
                    <i class="fab fa-facebook social mr-2 text-blue-700"></i>
                    <i class="fab fa-twitter social mr-2"></i>
                    <i class="fab fa-youtube social text-red-700"></i>
                </p>
            </div>


        </footer>


    );
};

export default Footer;