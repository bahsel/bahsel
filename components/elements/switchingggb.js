import React, { useState } from "react";
import Image from 'next/image'

import dayggb from '../../public/images/bgs/dayggb.jpg'
import nightggb from '../../public/images/bgs/nightggb.png'

class SwitchingGGB extends React.Component {
    // const day = useState(false);
    constructor(props) {
        super(props);
        this.state = {day: true}
    }

    render() {
        return (
            <div>
                <div style={{ visibility: this.state.day ? 'visible' : 'hidden' }}>
                    <Image
                        src={dayggb}
                        layout='fill'
                        placeholder='blurred'
                        quality={90}
                        objectPosition='30% 10%'
                        id='dayggb'
                        objectFit='cover'
                        priority={true}></Image>
                </div>
                <div style={{ visibility: this.state.day ? 'hidden' : 'visible' }}>
                    <Image
                        src={nightggb}
                        layout='fill'
                        placeholder='blurred'
                        quality={90}
                        objectPosition='60% 10%'
                        id='nightggb'
                        objectFit='cover'></Image>
                </div>
            </div>
        )
    }
}

export default SwitchingGGB