import React, { useState, useEffect } from 'react'
import SlideStackProjectItem from './SlideStackProjectItem'
import './SlideStackProject.css'
import SlideStackProjectImage from './SlideStackProjectImage'
import { use100vh } from 'react-div-100vh'

export default function SlideStackProjects() {
    const [slidestackImg1, setSlidestackImg1] = useState(true);
    const [slidestackImg2, setSlidestackImg2] = useState(true);
    const [slidestackImg3, setSlidestackImg3] = useState(true);

    const vh = use100vh()

    const changeImg = () => {
        if (window.scrollY >= (vh * 2)) {
            setSlidestackImg1(false);
            setSlidestackImg2(false);
            setSlidestackImg3(true);
        } else if (window.scrollY >= vh) {
            setSlidestackImg1(false);
            setSlidestackImg2(true);
            setSlidestackImg3(false);
        } else {
            setSlidestackImg1(true);
            setSlidestackImg2(false);
            setSlidestackImg3(false);
        }
    }

    window.addEventListener('scroll', changeImg);

    return (
        <div className="slidestack">
            <div className="slidestack_container">
                <div className="slidestack_block">
                    <SlideStackProjectItem title="My Therapy" subtitle="Pill reminder app" buttonText="pop pills" />
                </div>
                <div className="slidestack_block">
                    <SlideStackProjectItem title="cram" subtitle="Online Class environment" buttonText="learn cram" />
                </div>
                <div className="slidestack_block">
                    <SlideStackProjectItem title="Buset" subtitle="Bus routing navigation app" buttonText="get directions" />
                </div>
            </div>
            <div className="slidestack_img_container">
                <div className="slidestack_img_wrapper">
                    <img src="images/slidestack03.png" alt="My Therapy" className={slidestackImg1 ? 'slidestack_img1' : 'slidestack_img1 active'} />
                </div>
                <div className="slidestack_img_wrapper">
                    <img src="images/slidestack02.png" alt="cram" className={slidestackImg2 ? 'slidestack_img2' : 'slidestack_img2 active'} />
                </div>
                <div className="slidestack_img_wrapper">
                    <img src="images/slidestack01.png" alt="Buset" className={slidestackImg3 ? 'slidestack_img3' : 'slidestack_img3 active'} />
                </div>
                {/* <SlideStackProjectImage slidestackImgSrc="images/slidestack03.png" className="slidestack_img1" />
                <SlideStackProjectImage slidestackImgSrc="images/slidestack02.png" className="slidestack_img2" />
                <SlideStackProjectImage slidestackImgSrc="images/slidestack01.png" className="slidestack_img3" /> */}
            </div>
        </div>
    )
}
