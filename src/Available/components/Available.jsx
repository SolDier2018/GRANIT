import React from 'react';

import style from '../css/available.module.css';
import sand from '../img/one.png';
import macadam from '../img/sheben.png';
import soil from '../img/detal9.png';

class Available extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    srcImg: sand,
                    className: 'sand',
                    title: 'Песок речной',
                    desc: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.',
                    price: 330,
                    detailsLink: 'https://vk.com'
                },
                {
                    id: 2,
                    srcImg: macadam,
                    className: 'macadam',
                    title: 'Щебень',
                    desc: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.',
                    price: 330,
                    detailsLink: 'https://vk.com'
                },
                {
                    id: 3,
                    srcImg: soil,
                    className: 'soil',
                    title: 'Грунт',
                    desc: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.',
                    price: 330,
                    detailsLink: 'https://vk.com'
                }
            ]
        }
    }

    render() {

        const {items} = this.state;

        return(
            <section>
                <div className="container">
                    <div className={style.availableWrapp}>
                        <h2>Всегда в наличии</h2>
                        {
                            items.map(event =>
                                <div className={style.itemProduct + ' ' + event.className} key={event.id}>
                                    <img src={event.srcImg} alt={event.title} className={style.itemImg}/>
                                    <p className={style.itemTitle}>{event.title}</p>
                                    <p className={style.itemDesc}>{event.desc}</p>
                                    <span className={style.itemPrice}>от {event.price} р./т</span>
                                    <a href={event.detailsLink} className={style.detailLink}>Подробнее</a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Available;