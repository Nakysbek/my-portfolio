import React from 'react';
import './Portfolio.css';
import {PortfolioDataType} from "../../store/portfolioSlice";


export const Portfolio = ({portfolioData} : {portfolioData: PortfolioDataType[]}) => {

    return (
        <section id='portfolio'>

            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    portfolioData.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item_image'>
                                    <img src={image} alt='IMG'/>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item_cta'>
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    );
};

