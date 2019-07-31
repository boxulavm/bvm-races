import React from 'react'
import ListOfRaces from '../races/ListOfRaces'

const Races = () => {
    return (
        <div className="container">
            <div className='content'>
                <h1 className="brand text-center mt-5">All Races</h1>
                <div></div>
            </div>
            <ListOfRaces />
        </div>
    )
}

export default Races
