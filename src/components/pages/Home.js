import React from 'react'
import Showcase from '../layout/Showcase'
import AboutMe from '../layout/AboutMe'
import LatestRaces from '../layout/LatestRaces.js'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <Showcase />
            <AboutMe />
            <LatestRaces />
            <div className="container text-center">
                <Link to ='/races' className="btn btn-lg btn-primary shadow-lg px-5 mt-5">All races</Link>
            </div>
        </>
    )
}

export default Home
