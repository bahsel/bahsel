import * as React from 'react'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as style from './navbar.module.css'

import InstagramLogo from '../images/socials/instagram.svg'
import DiscordLogo from '../images/socials/Discord-Logo-Black.svg'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <StaticImage 
                src='../images/banner.png' 
                alt='BAHSEL Banner' 
                placeholder='blurred'
                loading='eager'
                className={style.logo}
                layout='fullWidth'
                quality={50}></StaticImage>
            <Link to="/" className={style.name}>
                BAHSEL
            </Link>
            <nav className={style.container}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <div className={style.socials}>
                {/* socials */}
                <InstagramLogo />
                <DiscordLogo />
            </div>
        </div>
    )
}

export default Navbar