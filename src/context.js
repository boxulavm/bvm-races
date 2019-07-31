import React, { Component } from 'react'
import { racesData} from './racesData'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        race_list: [],
    }

    componentDidMount(){
        this.setState({ race_list: racesData});
    };

    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;