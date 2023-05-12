import React, {useRef} from 'react';
import './Contact.css';
import {MdEmail} from 'react-icons/md';
import {SiMessenger} from 'react-icons/si';
import {IoLogoWhatsapp} from 'react-icons/io';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef<any>(null)

    const sendEmail = (e: any) => {

        e.preventDefault();

        emailjs.sendForm('service_4tpks2p', 'template_5l3dzfl', form.current, 'RWtbZyyvLttxcPFiU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id='contact'>

            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail className='contact__option-item'/>
                        <h4>Email</h4>
                        <h5>Nakysbek.e@mail.ru</h5>
                        <a href='mailto:nakysbek.er@gmail.com' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <SiMessenger className='contact__option-item'/>
                        <h4>Telegram</h4>
                        <h5>+7 747 529 8985</h5>
                        <a href='https://t.me/Nakysbek' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <IoLogoWhatsapp className='contact__option-item'/>
                        <h4>WhatsApp</h4>
                        <h5>+7 747 529 8985</h5>
                        <a href='https://api.whatsapp.com/send?phone=7475298985' target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

