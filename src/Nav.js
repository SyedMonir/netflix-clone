import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {

    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
        // useEffect need to clean that's why removing eventListener;
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'} `}>
            {/* Only apply the class nav_black when show is true */}
            <div className="nav_contents">
                <img
                    className='nav_logo'
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="logo"
                />

                <img
                    className='nav_avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar"
                />
            </div>




        </div>
    );
};

export default Nav;