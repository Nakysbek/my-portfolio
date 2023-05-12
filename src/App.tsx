import React from 'react';
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
import {useLocalStorage} from "./hooks/use-localStorage";
import i18n from "i18next";


const App = () => {

    const experienceData = useSelector<RootState, ExperienceDataType[]>(state => state.experience)
    const servicesData = useSelector<RootState, ServicesDataType[]>(state => state.services)
    const portfolioData = useSelector<RootState, PortfolioDataType[]>(state => state.portfolio)

    const [language, setLanguage] = useLocalStorage("language", "en")

    const handlerLanguage = () => {
        if (language === 'en') {
            i18n.changeLanguage('en')
            setLanguage('en')
        } else if (language === 'kz') {
            i18n.changeLanguage('kz')
            setLanguage('kz')
        } else {
            i18n.changeLanguage('ru')
            setLanguage('ru')
        }
    }

    return (
        <>
            <Header handlerLanguage={handlerLanguage}/>
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