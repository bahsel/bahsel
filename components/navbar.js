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
                                objectFit='contain'
                                ></Image>
                    </WidthImage>
                    <WidthImage className={style.name}>
                        <Image src={bahselText}
                            priority='true'
                            objectFit='contain'
                            alt=''
                            ></Image>
                    </WidthImage>

                    {/* <img src='/images/banner.png' className={style.logo}></img>
                    <img src='/images/bahsel.svg' className={style.name}></img> */}
                </a>
            </Link>

            <nav className={style.container}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                </ul>
            </nav>

            <div className={style.socials}>
                {/* socials */}
                <a href="https://www.instagram.com/bayareaesports1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <HeightImage>
                        <Image
                            src={instagramLogo}
                            objectFit='contain'
                            alt='Instagram'
                            ></Image>
                    </HeightImage>
                </a>
                <a href="https://discord.gg/Hcuj9cM" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                    <HeightImage>
                        <Image
                            src={discordLogo}
                            objectFit='contain'
                            alt='Discord'
                            ></Image>
                    </HeightImage>
                </a>

                {/* <a href="https://www.instagram.com/bayareaesports1" target="_blank" rel="noopener noreferrer">
                    <img src='/images/socials/instagram.svg'></img>
                </a>
                <a href="https://discord.gg/Hcuj9cM" target="_blank" rel="noopener noreferrer">
                    <img src='/images/socials/Discord-Logo-Black.svg'></img>
                </a> */}
            </div>
        </div>
    )
}

export default Navbar