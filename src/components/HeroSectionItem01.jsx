import { React, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function HeroSectionItem01(props) {

    useEffect(() => {
        Aos.init({ duration: 100 });
    }, [])

    return (
        <>
            <li className="no-bullets">
                <div className="hsp01-hero-container">
                    <figure data-aos="fade-down" className="hrsp01__item__pic-wrap">
                        <img src={props.src} alt="HeroSectionImg01" className="hsp01-img-app" />
                    </figure>
                    <div className="hsp01__info__container">
                        {/* <div className="hsp01__app__title"> */}
                        <h1>{props.title}</h1>
                        {/* </div> */}
                        {/* <div className="hsp01__app__description"> */}
                        <h5>{props.description}</h5>
                        {/* </div> */}
                        <div className="hsp01__store__container">
                            <a className="hsp01__playstore" href={props.linkPlayStore} target="_blank" rel="noreferrer">
                                <img src="images/playstore.png" className="hsp01__store" alt="PlayStore Link"/>
                            </a>
                            <a className="hsp01__playstore" href={props.linkAppStore} target="_blank" rel="noreferrer">
                                <img src="images/appstore.png" className="hsp01__store" alt="AppStore Link"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hsp01__bottom__divider" aria-hidden="true">
                    <svg className="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
                        <path className="wavePath-haxJK1" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="white">
                        </path>
                    </svg>
                </div>
            </li>

        </>
    )
}

export default HeroSectionItem01