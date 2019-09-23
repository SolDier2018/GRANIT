import React from 'react';

import style from '../css/footer.module.css';
import logoFooter from '../img/footerLogo.png';

class Footer extends React.Component {
    render() {
        return(
            <div className={'container'}>
                <div className={style.footerWrapper}>
                    <div className={style.logo}>
                        <img src={logoFooter} alt="logo"/>
                        <p className={style.logoTitle}>granit</p>
                        <p className={style.logoDesc}>Доставка нерудных материалов</p>
                    </div>
                    <div className={style.copyPath}>
                        © 2016. Гранти
                    </div>
                    <div className={style.phone}>
                        <a href="tel:88003421333">8 800 342-13-33</a>
                        <p className={style.descPhone}>Бесплатный звонок по России</p>
                    </div>
                    <div className={style.button}>
                        <button type={'button'}>Обратный звонок</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;