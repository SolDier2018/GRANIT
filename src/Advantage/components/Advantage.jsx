import React from 'react';

import style from '../css/Advantage.module.css';
import pig from '../img/piggy-bank.png';
import car from '../img/van.png';
import barrow from '../img/wheelbarrow.png';

class Advantage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Advantages: [
                {
                    id: 1,
                    img: pig,
                    title: 'Низкая цена',
                    desc: 'Мы сотрудничаем напрямую с производителем, поэтому можем гарантировать самую низкую цену.'
                },
                {
                    id: 2,
                    img: car,
                    title: 'Быстрая доставка',
                    desc: 'Весь товар уже находится на нашем складе. Нам остается только погрузить его и в путь!'
                },
                {
                    id: 3,
                    img: barrow,
                    title: 'Индивидуальный подход',
                    desc: 'Вам нужны бесперебойные поставки или большая партия товара со скидкой? Мы найдем решение! '
                }
            ]
        }

    }

    render() {

        const {Advantages} = this.state;

        return (
            <section className={style.advantages}>
                <div className="container">
                    <div className={style.advantageWrapper}>
                        <h2>Наши преимущества</h2>
                        {
                            Advantages.map(item =>
                                <div className={style.advantageItem} key={item.id}>
                                    <img src={item.img} alt="" className={style.advantagesImages}/>
                                    <p className={style.advantageTitle}>{item.title}</p>
                                    <p className={style.advantageDesc}>{item.desc}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Advantage;