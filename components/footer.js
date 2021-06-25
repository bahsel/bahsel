import * as React from 'react'

import * as style from './footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <p className={style.copyright}>
                Copyright © 2021 Bay Area High School Esports League
            </p>
        </div>
    )
}

export default Footer