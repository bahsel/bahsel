import * as React from 'react'

import { Link } from 'gatsby'

import * as style from './footer.module.css'

import InstagramLogo from '../images/socials/instagram.svg'
import DiscordLogo from '../images/socials/Discord-Logo-Black.svg'

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