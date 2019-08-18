import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderStocks = () => {
    let stocks = this.props.portfolioStocks
    return stocks.map((stock, index) => <Stock key={`${stock.id} - ${index}`} handleClick={this.props.removeStock} stock={stock} />)
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks()//render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
