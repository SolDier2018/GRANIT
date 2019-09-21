import React from 'react';

import style from '../css/header.module.css';
import logo from '../img/logo.png'

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mainMenu: [
                {
                    id: 1,
                    name: 'Главная',
                    url: '/'
                },
                {
                    id: 2,
                    name: 'Каталог',
                    url: '/'
                },
                {
                    id: 3,
                    name: 'Услуги',
                    url: '/'
                },
                {
                    id: 4,
                    name: 'Доставка',
                    url: '/'
                },
                {
                    id: 5,
                    name: 'О компании',
                    url: '/'
                },
                {
                    id: 6,
                    name: 'Контакты',
                    url: '/'
                }
            ]
        }

    }

    render () {

        const {mainMenu} = this.state;

        return (
            <div className={'container'}>
                <div className={style.headerWrapper}>
                    <img src={logo} alt="granit" className={style.logoHeader}/>
                    <p className={style.title + ' ' + style.titleLogo}>GRANIT</p>
                    <p className={style.opacityText}>Доставка нерудных материалов</p>
                    <a href="tel:88009421333" className={style.title + ' ' + style.phoneCoolBack}>8 800 342-13-33</a>
                    <p className={style.opacityText + ' ' + style.phoneText}>Бесплатный звонок по России</p>
                    <button type={'button'} className={style.coolBack}>Обратный звонок</button>
                </div>
                <nav className={style.mainMenu}>
                    <ul>
                        {
                            mainMenu.map(item =>
                                <li key={item.id}>
                                    <a href={item.url}>{item.name}</a>
                                </li>)
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;