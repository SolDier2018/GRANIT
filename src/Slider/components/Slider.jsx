import React, {Fragment} from 'react';

import style from '../css/slider.module.css';
import slide1 from '../img/slide1.png';

class Slider extends React.Component {
    render() {
        return (
            <section className={style.sliderSection}>
                <div className="container">
                    <div className={style.sliderWrapper}>
                        <h1>Быстрая доставка</h1>
                        <p className={style.descriptions}>
                            бетона, щебня, песка и&nbsp;других нерудных
                            материалов по&nbsp;Москве и&nbsp;Московской области
                        </p>
                        <button type={'button'} className={style.moreShipping}>Подробнее о доставке</button>
                        <div className={style.catalogLink}>
                            <p>или <a href="#">перейти в каталог</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Slider;