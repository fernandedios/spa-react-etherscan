import React, { Component } from 'react';

class Select extends Component {
    renderOptions(options) {
        return options.map(({ name, val }) => {
            return <option key={val} value={val}>{name}</option>;
        });
    }

    render() {
        const { name, options, ...others } = this.props;

        return (
            <div className="control">
                <span className="select">
                    <select name={name} {...others} >
                        {this.renderOptions(options)}
                    </select>
                </span>
            </div>
        );
    }
}

export default Select;
