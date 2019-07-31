import React, { Component } from 'react'
import SingleRace from '../races/SingleRace'
import { Consumer } from '../../context'

class ListOfRaces extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { race_list } = value;
                    if( race_list === undefined || race_list.length === 0) {
                        return <h1>Loading...</h1>
                    } else {
                        return (
                            
                                <div className="row">
                                    {
                                        Object.keys(race_list).map(key => <SingleRace key={key} details={race_list[key]} /> ).reverse()
                                    }
                                </div>
                            
                        );
                    }
                }}
            </Consumer>
        )
    }
}

export default ListOfRaces