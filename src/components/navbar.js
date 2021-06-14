import * as React from 'react'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as style from './navbar.module.css'

import BahselText from '../images/bahsel.svg'
import InstagramLogo from '../images/socials/instagram.svg'
import DiscordLogo from '../images/socials/Discord-Logo-Black.svg'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link to="/" className={style.homeWrapper}>
                <StaticImage
                    src='../images/banner.png'
                    alt='BAHSEL Banner'
                    placeholder='tracedSVG'
                    loading='eager'
                    className={style.logo}
                    layout='fullWidth'
                    quality={50}></StaticImage>
                <div className={style.name}>
                    <BahselText></BahselText>
                </div>
            </Link>
            <nav className={style.container}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <div className={style.socials}>
                {/* socials */}
                <a href="https://www.instagram.com/bayareaesports1">
                    <InstagramLogo />
                </a>
                <a href="https://discord.gg/Hcuj9cM">
                    <DiscordLogo />
                </a>
            </div>
        </div>
    )
}

export default Navbar