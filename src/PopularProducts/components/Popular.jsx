import React from 'react';

import style from '../css/popular.module.css';
import macadam from '../img/macadam.png';
import granite from '../img/granite.png';
import macGranite from '../img/macGranite.png';
import macGraniteDisper from '../img/macGraniteDisper.png';

class PopularProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popularProducts: [
                {
                    id: 1,
                    img: macadam,
                    sale: true,
                    title: 'Гранитный щебень 5-20мм',
                    prevPrice: '1500',
                    currentPrice: '1350'
                },
                {
                    id: 2,
                    img: granite,
                    sale: true,
                    title: 'Гранитный щебень 5-20мм',
                    prevPrice: '1600',
                    currentPrice: '1250'
                },
                {
                    id: 3,
                    img: macGranite,
                    sale: false,
                    title: 'Гранитный щебень 5-20мм',
                    prevPrice: '',
                    currentPrice: '1700'
                },
                {
                    id: 4,
                    img: macGraniteDisper,
                    sale: false,
                    title: 'Гранитный щебень 5-20мм',
                    prevPrice: '',
                    currentPrice: '1500'
                }
            ]
        }

    }

    render() {

        const {popularProducts} = this.state;

        return (
            <section className={style.popularProducts}>
                <div className="container">
                    <div className={style.productsWrapper}>
                        <h2>Популярные продукты</h2>
                        {
                            popularProducts.map(function (item) {

                                const color = item.sale ? 'red' : 'black';

                                return (
                                    <div className={style.product} key={item.id}>
                                        <img src={item.img} alt={item.title} className={style.img}/>
                                        {item.sale ? <span className={style.sale}>акция</span> : null}
                                        <p className={style.title}>{item.title}</p>
                                        <div className={style.price}>
                                            {item.sale ?
                                                <span
                                                    className={style.prevPrice}>{item.prevPrice} р./т&nbsp;&nbsp;</span> : null}
                                            <span className={style.currentPrice}
                                                  style={{color: color }}>{item.currentPrice} р./т</span>
                                        </div>
                                        <button type={'button'} className={style.button}>Купить</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default PopularProducts;