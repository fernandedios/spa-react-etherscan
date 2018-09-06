import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        const { type, name, ...others } = this.props;

        return (
            <div className="control">
                <input name={name} type={type} className="input" {...others} />
            </div>
        );
    }
}

TextInput.defaultProps = { type: 'text' };

export default TextInput;
