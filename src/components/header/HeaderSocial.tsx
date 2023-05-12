import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

export const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/ernar-nakysbek-18093a266/' target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/Nakysbek' target='_blank'><FaGithub/></a>
            <a href='https://dribble.com' target='_blank'><FiDribbble/></a>
        </div>
    );
};

