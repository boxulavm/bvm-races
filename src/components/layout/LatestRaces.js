import React from 'react'
import ListOfLatestRaces from '../races/ListOfLatestRaces'

const LatestRaces = () => {
    return (
        <div className="container">
            <div className='content'>
                <h1 className="brand text-center mt-5">Latest Races</h1>
                <div></div>
            </div>
            <ListOfLatestRaces />
        </div>
    )
}

export default LatestRaces
