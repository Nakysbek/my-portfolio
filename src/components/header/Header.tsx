import React from 'react';
import './Header.css';
import {CTA} from "./CTA";
import ME from '../../assets/IMG_1600 (1).jpg'
import {HeaderSocial} from "./HeaderSocial";
import {useTranslation} from "react-i18next";

export const Header = ({handlerLanguage} : {handlerLanguage : any}) => {

    const {t} = useTranslation()

    return (
        <header>
            <div className='container header__container'>
                <div className='language'>
                    <button onClick={handlerLanguage}>EN</button>
                    <button onClick={handlerLanguage}>KZ</button>
                    <button>RU</button>
                </div>
                    <h5>{t('HELLO_IM')}</h5>
                    {/*<h5>Hello, I'm</h5>*/}
                    <h1>Nakysbek Ernar</h1>
                    <h5 className='text-light'>Frontend developer</h5>
                <CTA/>
                <HeaderSocial/>

                    <img className='me' src={ME} alt='me' style={{'objectFit': 'cover'}}/>

                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

