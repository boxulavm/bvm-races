import React from 'react'
import floskula from '../../floskula.jpg'

const AboutMe = () => {
    return (
        <div className="container">
            <div className='content'>
                <h1 className="brand text-center mt-5">About Me</h1>
                <div></div>
            </div>
            <div className="row mt-5">

                <div className="col-md-4 text-center mb-4">
                    <img className='img-fluid floskula rounded-circle shadow-lg' src={floskula} alt="floskula"/>
                </div>

                <div className="col-md-8 text-left">
                    <h3>Lorem Ipsum:</h3>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis orci et urna semper convallis ut vitae ipsum. Proin nisl velit, consequat eu nulla ut. </p>
                    <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis scelerisque ligula, id scelerisque nunc molestie quis. Ut pretium consectetur iaculis. In gravida, mauris ut aliquet mollis, metus turpis ultrices magna, ut ornare nisl diam sit amet velit. Aliquam erat volutpat. Aliquam non aliquam lorem. Duis malesuada, justo non gravida.</p>
                    <p>BVM's goal is to: <i>"Build a future where people live in harmony with nature."</i></p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
