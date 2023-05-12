import React from 'react';
import './Footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Nakysbek Ernar</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.facebook.com/profile.php?id=100033276232101'><FaFacebookSquare/></a>
                <a href='https://instagram.com/nakysbek.e?igshid=NTc4MTIwNjQ2YQ=='><BsInstagram/></a>
                <a href='https://t.me/Nakysbek'><FaTelegramPlane/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Nakysbek Ernar. All rights reserved.</small>
            </div>

        </footer>
    );
};

