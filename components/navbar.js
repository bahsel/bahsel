import * as React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import * as style from './navbar.module.css'

import banner from '../public/images/banner.png'

import bahselText from '../public/images/bahsel.svg'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link href="/">
                <a className={style.homeWrapper}>
                    <div className={style.logo}>
                        <Image src={banner}
                            alt='BAHSEL Banner'
                            priority='true'
                            objectFit='fill'
                            layout='responsive'
                            ></Image>
                    </div>
                    <div className={style.name}>
                        <Image src={bahselText}
                            priority='true'
                            objectFit='fill'
                            layout='responsive'
                            alt=''
                            ></Image>
                    </div>
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
                    <img src='/images/socials/instagram.svg'></img>
                </a>
                <a href="https://discord.gg/Hcuj9cM" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                    <img src='/images/socials/Discord-Logo-Black.svg'></img>
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