import React from 'react'
import '../../App.css'
import AppBattleSection from '../AppBattleSection'
import Cards from '../Cards'
import CardsProjects from '../CardsProjects'
import Footer from '../Footer'
import HeroSectionProject01 from '../HeroSectionProject01'
import GenericProjectSection from '../GenericProjectSection';
import SlideStackProjects from '../SlideStackProjects'

function MobileApplicationHome() {
    return (
        <>
            <HeroSectionProject01 />
            {/* <AppBattleSection /> */}
            <Cards />
            <GenericProjectSection title="Top notch Functionality" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." img="images/slidestack02.png" />
            {/* <SlideStackProjects /> */}
            <Footer />
        </>
    )
}

export default MobileApplicationHome;