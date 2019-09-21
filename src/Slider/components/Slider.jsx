import React from 'react';

import style from '../css/slider.module.css';
import slide1 from '../img/slide1.png';

class Slider extends React.Component {
    render() {
        return (
            <div className={style.sliderWrapper}>
                <img src={slide1} alt="header-slider" className={style.img}/>
                <h1>Быстрая доставка</h1>
                <p className={style.descriptions}>
                    бетона, щебня, песка и&nbsp;других нерудных
                    материалов по&nbsp;Москве и&nbsp;Московской области
                </p>
                <button type={'button'} className={style.moreShipping}>Подробнее о доставке</button>
                <p className={style.catalogLink}>или <a href="#">перейти в каталог</a></p>
            </div>
        )
    }
}

export default Slider;