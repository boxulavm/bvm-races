import React, { Component } from 'react'

export default class SingleRace extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    }

    render() {
        const { image, title, organizator, date, distance, desc } = this.props.details
        return (
        <div className='col-lg-4 col-md-6'>
            <div className="card text-dark shadow-lg mb-2">
                <div className="card-img-wrap">
                    <img className="card-img-top" src={image} alt="Card cap" />
                </div>
                <div className="card-body">
                    <h4 className='card-title'>{title}</h4>
                    <h6 className='card-subtitle mb-2'><i>{date}</i></h6>

                    {this.state.showInfo &&

                    
                       <div>
                            <p>{desc}</p>
                            <p>Distance: <span className='text-success'>{distance} km</span></p>
                            <p>Organizator: <span className="text-warning">{organizator}</span></p>
                       </div>
                    }

                    <button 
                        onClick={this.handleInfo}
                        className="btn btn-primary mt-4">{this.state.showInfo ? 'Less' : 'More'}
                        {this.state.showInfo ? <i className="fas fa-chevron-up ml-4" /> : <i className="fas fa-chevron-down ml-4" />}
                        
                    </button>
                </div>
            </div>
        </div>
        )
    }
}