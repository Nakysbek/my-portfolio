import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {ExperienceDataType} from "../../store/experienceSlice";

export const Experience = ({experienceData}: {experienceData: ExperienceDataType[]}) => {


    return (
        <section id='experience'>

            <h5>What scales I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                {
                    experienceData.map(({id, heading, data}) => {
                        return (
                            <div className='experience__frontend' key={id}>
                                <h3>{heading}</h3>
                                <div className='experience__content'>
                                    {
                                        data.map(({id, title, proficiency}) => {
                                            return (
                                                <article className='experience__details' key={id}>
                                                    <BsFillPatchCheckFill className='experience__details_icon'/>
                                                    <div>
                                                        <h4>{title}</h4>
                                                        <small className='text-light'>{proficiency}</small>
                                                    </div>
                                                </article>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

