import React from 'react';
import { render } from 'react-dom';
import Button from './Button';
import Display from './Display';

class App extends React.Component {
    state = {
        number1:0
    }

    increment = () => {
        this.setState({ number1: this.state.number1+1 });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <Button increment={this.increment} />
                <Display text={this.state.number1} />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));