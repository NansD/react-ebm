import React from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button'

export default class CountPresentation extends React.PureComponent {
    static propTypes = {
        count: PropTypes.number.isRequired,
        onCounterChange: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <Button onClick={this.props.onCounterChange(-1)}> -- </Button>
                <Button onClick={this.props.reset}> 0 </Button>
                <Button onClick={this.props.onCounterChange(+1)}> ++ </Button>
            </div>
        );
    }
}