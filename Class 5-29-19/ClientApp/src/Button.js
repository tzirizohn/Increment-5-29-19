import React from 'react';

class Button extends React.Component {
  
    render() {
        return (
            <div>
                <button onClick={this.props.increment} className='btn btn-primary'>Add</button>
            </div>  
        );
    }
}

export default Button;