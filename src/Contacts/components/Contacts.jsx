import React from 'react';

import style from '../css/contacts.module.css';

class Contacts extends React.Component {
    render() {
        return(
            <section className={style.contacts}>
                <div className="container">
                    <div className={style.contactsWrapper}>
                        Томочка самая красивая девочка*
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;