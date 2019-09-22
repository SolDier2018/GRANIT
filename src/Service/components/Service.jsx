import React from 'react';

import style from '../css/service.module.css';
import kamaz from '../img/kamaz.png';
import frontKamaz from '../img/frontKamaz.png';
import traktor from '../img/traktor.png';

class Service extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            services: [
                {
                    id: 1,
                    img: kamaz,
                    title: 'Аренда самосвала',
                    url: '/'
                },
                {
                    id: 2,
                    img: frontKamaz,
                    title: 'Аренда спецтехники',
                    url: '/'
                },
                {
                    id: 3,
                    img: traktor,
                    title: 'Ратье траншеи',
                    url: '/'
                }
            ]
        }

    }

    render() {

        const {services} = this.state;

        return (
            <section className={style.sevice}>
                <div className="container">
                    <div className={style.serviceWrapper}>
                        <h2>Наши услуги</h2>
                        {
                            services.map(item =>
                                <a href={item.url} className={style.serviceItem} key={item.id}>
                                    <img src={item.img} alt={item.title}/>
                                    <p className={style.title}>{item.title}</p>
                                </a>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Service;