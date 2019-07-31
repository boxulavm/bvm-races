import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar text-light'>
            <h2 className='brand text-light'>
                <i className="fas fa-running text-primary"></i> BVM Races 
            </h2>
            <ul className='pt-1'>
                <li>
                    <NavLink to='/' exact activeClassName="my-active">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/races' activeClassName="my-active">Races</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeClassName="my-active">About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
