import React, { Component } from "react";
import axios from "axios";
import SingleTrade from "../SingleTrade";

const root = "https://blooming-basin-10284.herokuapp.com";

class TradeList extends Component {
    constructor(props) {
        super(props);

        this.deleteTrade = this.deleteTrade.bind(this);

        this.state = {
            trades: []
        };
    }

    componentDidMount() {
        axios.get(root + "/trades/")
            .then(res => {
                let data = res.data;

                // filter by user 
                data = data.filter(item => item.user === auth);
                this.setState({ trades: data })
            })
            .catch(err => console.log(err))
    }


    tradeList() {
        return this.state.trades.map(currentTrade => {
            return <SingleTrade trade={currentHabit} />;
        })
    }

    render() {
        return (
            <div>
                <h1>Trade List</h1>
                <table className="table mt-3">
                    <thead className="thead-light">
                        <tr>
                            <th>Has</th>
                            <th>Color</th>
                            <th>Certification</th>
                            <th>Wants</th>
                            <th>Color</th>
                            <th>Certification</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tradeList()}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default TradeList;