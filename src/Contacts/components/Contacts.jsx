import React from 'react';

import style from '../css/contacts.module.css';
import phone from '../img/phone-receiver.png';
import map from '../img/location-pin.png';
import mail from '../img/close-envelope.png';

class Contacts extends React.Component {
    render() {
        return(
            <section className={style.contacts}>
                <div className="container">
                    <div className={style.contactsWrapper}>
                        <div className={style.contactInfo}>
                            <p className={style.title}>Контакты</p>
                            <img src={phone} alt="phone" className={style.iconPhone}/>
                            <div className={style.phone}>
                                <a href="tel:88000342334">8 800 034-23-34</a>
                                <a href="tel:84950342334">8 495 034-23-34</a>
                            </div>
                            <img src={map} alt="map" className={style.iconMap}/>
                            <p className={style.adress}>Московская обл. г.Балашиха, пер. Столовой, д.23, кор. 34</p>
                            <img src={mail} alt="mail" className={style.iconMail}/>
                            <a href="mailto:info@stroika.ru" className={style.mailLink}>info@stroika.ru</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;