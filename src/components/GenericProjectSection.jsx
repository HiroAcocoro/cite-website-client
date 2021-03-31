import React from 'react'
import './GenericProjectSection.css'

function GenericProjectSection(props) {
    return (
        <>
            <div className="generic_project_section_container">
                <div className="gp_content_container">
                    <div className="gp_content_title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="gp_content">
                        <p>{props.content}</p>
                    </div>
                </div>
                <div className="gp_img_container">
                    <div className="gp_img">
                        <img src={props.img} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenericProjectSection
