import React from 'react';
import { Link } from 'react-router-dom';
import mypic from '../../images/mypic4.jpg';

const Header = () => {

    const menuItems = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT ME</Link></li>
        <li><Link to="/skill">SKILLS</Link></li>
        <li><Link to="/mywork">MY WORK</Link></li>
        <li><Link to="/contact">CONTACT ME</Link></li>
        <li><Link to="/blog">BLOGS</Link></li>
    </>


    return (
        <div class="navbar bg-base-100 text-sm">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                {/* <img src="" alt="" /> */}
                <img src={mypic} class="max-w-sm  rounded-full  w-10 lg:w-14" />

                <Link class="btn btn-ghost text-lg lg:text-2xl normal-case" to="/">Syed Mahade Hasan</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            {/* <div class="navbar-end">
                <Link to="/login" className="btn btn-ghost ">My Resume</Link>
            </div> */}
        </div>
    );
};

export default Header;