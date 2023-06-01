import React, {useEffect, useState} from 'react';
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {About} from "./components/about/About";
import {Experience} from "./components/experience/Experience";
import {Services} from "./components/services/Services";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import {Portfolio} from "./components/portfolio/Portfolio";
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import {ExperienceDataType} from "./store/experienceSlice";
import {ServicesDataType} from "./store/servicesSlice";
import {PortfolioDataType} from "./store/portfolioSlice";
import {useTranslation} from "react-i18next";
import i18n from "i18next";


const App = () => {

    const experienceData = useSelector<RootState, ExperienceDataType[]>(state => state.experience)
    const servicesData = useSelector<RootState, ServicesDataType[]>(state => state.services)
    const portfolioData = useSelector<RootState, PortfolioDataType[]>(state => state.portfolio)


    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience experienceData={experienceData}/>
            <Services servicesData={servicesData}/>
            <Portfolio portfolioData={portfolioData}/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;