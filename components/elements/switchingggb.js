import React, { useState } from "react";

import style from './switchingggb.module.css'

class SwitchingGGB extends React.Component {
    // const day = useState(false);
    constructor(props) {
        super(props);
        this.state = {day: true}
    }

    render() {
        return (
            <div className={style.wrap}>
                <div style={{ visibility: this.state.day ? 'visible' : 'hidden' }}>
                    <img src='/images/bgs/dayggb.jpg' className={style.day}></img>
                </div>
                <div style={{ visibility: this.state.day ? 'hidden' : 'visible' }}>
                    <img src='/images/bgs/nightggb.jpg' className={style.night}></img>
                </div>
            </div>
        )
    }
}

export default SwitchingGGB