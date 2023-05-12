import React from 'react';
import './About.css';
import ME from '../../assets/IMG_11.jpg';
import {RiAwardFill} from 'react-icons/ri'
import {SlGraduation} from 'react-icons/sl'
import {VscFolderActive} from 'react-icons/vsc'

export const About = () => {
    return (
        <section id='about'>
            <h5>Go To Now</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me_image'>
                        <img src={ME} alt='About Image'/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>

                        <article className='about__card'>
                            <RiAwardFill className='about__icon'/>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <SlGraduation className='about__icon'/>
                            <h5>Education</h5>
                            <small>Narxoz university</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderActive className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>

                    </div>
                    <p>
                        I am a front-end developer with excellent learning skills and the ability to solve problems.
                        I strive to bring success to the company by developing optimal algorithms and approaches that will solve problems.
                        My knowledge in the field of application development in JS is very useful to meet the technical requirements of the company.

                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

