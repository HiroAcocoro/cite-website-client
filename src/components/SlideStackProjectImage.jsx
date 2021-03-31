import React from 'react'

export default function SlideStackProjectImage(props) {
    return (
        <>
            <div className="slidestack_img_wrapper">
                <img src={props.slidestackImgSrc} alt={props.slidestackImgSrc} />
            </div>
        </>
    )
}
