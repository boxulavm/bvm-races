import React from 'react'

const Footer = () => {
    return (
        <div className='text-center footer'>
            <div className="container">
                <div className="row">
                    <div className="col m-1">
                    <i className="fas fa-globe fa-2x p-2"></i>
                    <i className="fas fa-envelope fa-2x p-2"></i>
                    <i className="fab fa-github fa-2x p-2"></i>
                    </div>
                </div>
            </div>
            <h6>by: <span className="brand"> BVM </span> &copy;</h6>
        </div>
    )
}

export default Footer
