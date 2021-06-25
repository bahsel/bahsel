import * as React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import HeightImage from './templates/height-image'
import WidthImage from './templates/width-image'

import * as style from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link href="/">
                <a className={style.homeWrapper}>
                    <img src='/images/banner.png' className={style.logo}></img>
                    <img src='/images/bahsel.svg' className={style.name}></img>
                </a>
            </Link>

            <nav className={style.container}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                </ul>
            </nav>

            <div className={style.socials}>
                {/* socials */}
                <a href="https://www.instagram.com/bayareaesports1" target="_blank" rel="noopener noreferrer">
                    <img src='/images/socials/instagram.svg'></img>
                </a>
                <a href="https://discord.gg/Hcuj9cM" target="_blank" rel="noopener noreferrer">
                    <img src='/images/socials/Discord-Logo-Black.svg'></img>
                </a>
            </div>
        </div>
    )
}

export default Navbar