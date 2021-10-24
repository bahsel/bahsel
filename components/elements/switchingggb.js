import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import Image from 'next/image'

import style from './switchingggb.module.css'

import dayggb from '../../public/images/bgs/dayggb.jpg'
import nightggb from '../../public/images/bgs/nightggb.png'

const fades = {
    show: {
        opacity: 1,
        transition: {
            duration: 0.75
        }
    },
    hide: { opacity: 0 }
}

const SwitchingGGB = () => {
    const [src, setSrc] = useState('/');
    const [imgSet, setImgSet] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        var now = new Date();

        var day = !(now.getHours() < 7 || now.getHours() > 19);

        setSrc(day ? '/images/bgs/dayggb.jpg' : '/images/bgs/nightggb.png');

        setLoaded(false);
        setImgSet(true);
    }, []);

    return (
        <div className={style.wrap}>
            <motion.div initial='hide' animate={imgSet && loaded ? 'show' : 'hide'} variants={fades}>
                <Image
                    src={src}
                    placeholder='blurred'
                    quality={100}
                    objectPosition='30% 10%'
                    id='dayggb'
                    objectFit='cover'
                    onLoadingComplete={() => {setLoaded(true)}}
                    layout='fill'
                    alt=''
                    ></Image>
            </motion.div>
        </div>
    );
}

export default SwitchingGGB