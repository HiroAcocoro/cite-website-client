import { React, useState, useEffect } from 'react'
import './AppBattleSection.css'
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { use100vh } from 'react-div-100vh'

function AppBattleSection() {
    const [height, setHeight] = useState(0);
    const [imgStyle, setImgStyle] = useState({});

    const vh = use100vh();

    const animateImgOnScroll = () => {
        // setHeight(window.scrollY);
        if (window.scrollY >= vh + (vh / 2)) {
            setImgStyle({ transform: 'translate3d(4.5217 %, -28.4783 %, 0px) scale(0.6717, 0.6717)' })
        }
    }

    window.addEventListener('scroll', animateImgOnScroll);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='app-battle-container'>
            <div className='app-battle-header'>
                <h1>App Battle Competition <br /> Winner!</h1>
                <img src='/images/confetti2.png' className='app-battle-bg-image' alt='' />
            </div>
            <div className='app-battle-image-wrap'>
            <iframe src="https://landrealty168.000webhostapp.com/?fbclid=IwAR1pBPGPk8HsOetFmAQ-uM3WT0ULEtvFhawZLyAgh3oLTZCKtBtOmkYLD3k"></iframe>
                {/* <img src='/images/app02.png' className='app-battle-app-image' alt='Moodle app icon' style={ imgStyle } /> */}
            </div>
            <div>
                <h1>{height}</h1>
            </div>
        </div>
    )

}

export default AppBattleSection