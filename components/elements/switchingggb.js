import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import style from './switchingggb.module.css'

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
    const [loaded, setLoaded] = useState(false);
    const [day, setDay] = useState(true);

    useEffect(() => {
        var now = new Date();
        if (now.getHours() < 7 || now.getHours() > 19) {
            setDay(false);
        }
        setLoaded(true)
    })

    return (
        <div className={style.wrap}>
            <motion.div initial='hide' animate={day ? (loaded ? 'show' : 'hide') : 'hide'} variants={fades}>
                <img src='/images/bgs/dayggb.jpg' className={style.day}></img>
            </motion.div>
            <motion.div initial='hide' animate={!day ? (loaded ? 'show' : 'hide') : 'hide'} variants={fades}>
                <img src='/images/bgs/nightggb.png' className={style.night}></img>
            </motion.div>
        </div>
    )
}

export default SwitchingGGB