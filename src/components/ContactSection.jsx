import React from 'react'
import { Button } from './Button'
import './ContactSection.css'

export default function ContactSection() {
    return (
        <>
            <div className="main-container">
                <div className="header-container">
                    <h1>Contact</h1>
                    <p>//</p>
                </div>
                <div className="form-block">
                    <div className="block-content">
                        <div className="warning-container">
                            <p>Due to the ongoing COVID-19 pandemic, response timelines have been impacted</p>
                            <p>You can expect a response withing 4-7 business days for replies.</p>
                        </div>
                        <div className="form-container">
                            <div className="input-areas">
                                <form>
                                    <div className="input-wrapper">
                                        <input type="text" name="name" placeholder="your name *" required="1" className="contact-input" />
                                    </div>
                                    <div className="input-wrapper">
                                        <input type="email" name="email" placeholder="your e-mail address *" required="1" className="contact-input" />
                                    </div>
                                    <div className="input-wrapper">
                                        <textarea name="message" cols="60" rows="8" placeholder="your message *" required="1" className="contact-message" />
                                    </div>
                                    <Button buttonStyle="btn--outline">Send message</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
