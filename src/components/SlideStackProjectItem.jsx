import { React, useEffect, useState } from 'react'
import { Button } from './Button'

export default function SlideStackProjectItem(props) {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="title_content">
                <div className="title_inner_block">
                    <div className="title_container">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="title_subtitle">
                        <p>{props.subtitle}</p>
                    </div>
                    <div className="button_container">
                        <Button className='btns' buttonStyle='btn--dark' buttonSize='btn--large'>{props.buttonText}</Button>
                    </div>
                </div>
            </div>
            {/* <div className="slidestack_content">
                <div className="slidestack_container">
                    <img src={props.slidestackImgSrc} alt={props.slidestackImgSrc} className="slidestack_img" />
                </div>
            </div> */}
        </>
    )
}
