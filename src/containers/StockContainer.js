import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  renderStocks = () => {
    let stocks = this.props.stocks
    return stocks.map(stock => <Stock key={stock.id} handleClick={this.props.buyStock} stock={stock} />)
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()//render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
