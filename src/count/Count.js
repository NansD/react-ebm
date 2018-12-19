import React from 'react';
import CountPresentation from './CountPresentation'

export default class Count extends React.PureComponent {
    state = {
        count: 0
    };
    onCounterChange = value => () => {
        const {count} = this.state;
        this.setState({ count: count + value });
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    render(){
        return <CountPresentation onCounterChange={this.onCounterChange}
                                  reset={this.reset}
                                  count={this.state.count}/>
    }
}