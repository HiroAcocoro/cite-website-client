import { React, useEffect } from 'react'
import './HeroSectionProject01.css'
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HeroSectionItem01 from './HeroSectionProjectItem01'


function HeroSectionProject01() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='hsp01-hero'>
            <div className="app__img__wrapper">
                <HeroSectionItem01
                src="images/app01.png"
                title="My Therapy"
                description="Get the free “MUST HAVE” award-winning pill reminder and medication tracker ranked #1 by pharmacists, physicians and patients. Join the millions of people using Medisafe who are taking control of their medication management with our free app - stay on track and never miss another med."
                linkPlayStore="https://play.google.com/store/apps/details?id=eu.smartpatient.mytherapy&hl=en&gl=US"
                linkAppStore="https://apps.apple.com/us/app/mytherapy-medication-reminder/id662170995"
                />
            </div>
        </div>
    )
}

export default HeroSectionProject01
