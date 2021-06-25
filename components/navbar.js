import * as React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import HeightImage from './templates/height-image'
import WidthImage from './templates/width-image'

import * as style from './navbar.module.css'

import banner from '../public/images/banner.png'

import bahselText from '../public/images/bahsel.svg'
import instagramLogo from '../public/images/socials/instagram.svg'
import discordLogo from '../public/images/socials/Discord-Logo-Black.svg'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link href="/">
                <a className={style.homeWrapper}>
                    <WidthImage className={style.logo}>
                        <Image src={banner}
                            alt='BAHSEL Banner'
                            priority='true'
                            layout='fill'
                            objectFit='contain'
                            quality={10}></Image>
                    </WidthImage>
                    <WidthImage className={style.name}>
                        <Image src={bahselText}
                            priority='true'
                            layout='fill'
                            objectFit='contain'></Image>
                    </WidthImage>
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
                    <HeightImage>
                        <Image
                            src={instagramLogo}
                            layout='fill'
                            objectFit='contain'></Image>
                    </HeightImage>
                </a>
                <a href="https://discord.gg/Hcuj9cM" target="_blank" rel="noopener noreferrer">
                    <HeightImage>
                        <Image
                            src={discordLogo}
                            layout='fill'
                            objectFit='contain'></Image>
                    </HeightImage>
                </a>
            </div>
        </div>
    )
}

export default Navbar