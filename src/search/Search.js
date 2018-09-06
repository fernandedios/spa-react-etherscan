import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import TextInput from '../common/TextInput';
import * as actions from './SearchActions';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            address:'', 
            offset: 10, 
            sort: 'asc'
        };
        this.handleEvent = this.handleEvent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleEvent(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const { address, sort, offset } = this.state;
        this.props.fetchTransactions({ address, offset, sort, page: 1 });
        this.props.fetchBalance({ address });
        this.setState({ address: '' });
    }

    renderTable() {
        if (this.props.transactions && this.props.transactions.result && this.props.balance) {

            // see if query succeeded
            if (this.props.transactions.status !== "0") {
                const rows = this.props.transactions.result.map(({ hash, blockHash, from, gasUsed }) => {
                    
                    return (
                            <tr key={hash}>
                                <th>{this.createLink(hash, 'tx')}</th>
                                <th>{this.createLink(blockHash, 'block')}</th>
                                <th>{gasUsed}</th>
                                <th>{this.createLink(from, 'address')}</th>
                            </tr>
                        );
                    });

                    return (
                        <div className="table-container">
                            <h2 className="has-text-centered">Address: <span className="has-text-primary">{this.props.transactions.address}</span></h2>
                            <h4 className="has-text-centered">Balance: <span className="has-text-primary">{this.props.balance.result}</span></h4>
                            <p className="has-text-centered">
                                Showing: <span className="has-text-primary">{this.props.transactions.result.length}</span> Order: <span className="has-text-primary">{(this.props.transactions.sort).toUpperCase()}</span>
                            </p>

                            <table className="table is-striped is-hoverable is-fullwidth">
                                <thead>
                                    <tr>
                                        <th>TxHash</th>
                                        <th>Block</th>
                                        <th>Gas Used</th>
                                        <th>From</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows}
                                </tbody>
                            </table>
                        </div>
                    );
                }

                else {
                    return <p className="has-text-centered has-text-danger">{this.props.transactions.result}</p>;
                }
            }
    }

    createLink(str, type) {
        const title = (str.length > 14) ? str.substr(0, 13) + '...' : str;
        return <a href={`https://etherscan.io/${type}/${str}`} target="_blank">{title}</a>
    }

    render() {
        return (
            <div id="search" className="container">
                <div className="box">
                    <div className="content">
                        <div className="notification has-text-centered">Search Etherscan:</div>

                        <form onSubmit={this.onSubmit}>
                            <div className="field has-addons has-addons-centered">
                                <TextInput name="address" value={this.state.address} id="field_eth" onChange={this.handleEvent} placeholder="Ethereum Address" />
                                <div className="control">
                                    <button 
                                        disabled={this.state.address === '' || this.state.loading} 
                                        type="submit" 
                                        className={classNames({ button:true, "is-info": true, "is-loading": this.state.loading })}
                                    >
                                    Search
                                    </button>
                                </div>
                            </div>
                            <div className="field has-addons has-addons-centered">
                                <div className="control">
                                    <span className="select">
                                    <select name="offset" onChange={this.handleEvent} value={this.state.offset} >
                                        <option value="10">Number of Results</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    </span>
                                </div>
                                <div className="control">
                                    <span className="select">
                                        <select name="sort" onChange={this.handleEvent} value={this.state.sort} >
                                            <option value="asc">ASC</option>
                                            <option value="desc">DESC</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                    {this.renderTable()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ transactions, balance }) => {
    return { transactions, balance };
};

export default connect(mapStateToProps, actions)(Search);
