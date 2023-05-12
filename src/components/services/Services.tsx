import React from 'react';
import './Services.css';
import {BiCheck} from "react-icons/bi";
import {ServicesDataType} from "../../store/servicesSlice";

export const Services = ({servicesData} : {servicesData: ServicesDataType[]}) => {

    return (
        <section id='services'>

            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                {
                    servicesData.map(({id, heading, data}) => {
                        return (
                            <article className='service' key={id}>
                                <div className='service__head'>
                                    <h3>{heading}</h3>
                                </div>
                                <ul className='service__list'>
                                    {
                                        data.map(({id, title}) => {
                                            return (
                                                <li key={id}>
                                                    <BiCheck className='service__list_icon'/>
                                                    <p>{title}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

