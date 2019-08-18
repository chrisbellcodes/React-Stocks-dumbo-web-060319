import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
   state = {
     stocks: [],
     portfolio: [],
     filter: 'All',
     sort: ""
   }

  buyStock = (stock) => {
     this.setState(prevState => {
       return {
         portfolio: [stock, ...prevState.portfolio]
       }
     })
   }

 removeStock = (stock) => {
   let stockIndex = this.state.portfolio.indexOf(stock)
   let portfolioStocks = [...this.state.portfolio]
   portfolioStocks.splice(stockIndex, 1)
   this.setState({
       portfolio: portfolioStocks
     }
   )
 }

 filterTerm = (e) => {
   let term = e.target.value;
   this.setState({
     filter: term
   })
 }

 sortTerm = (e) => {
   let term = e.target.value;
   this.setState({
     sort: term
   })
 }

 renderStock = () => {
   let stocks = [...this.state.stocks]

   if (this.state.filter === "All") {
     stocks = [...this.state.stocks]
   } else {
     stocks = this.state.stocks.filter(stock => stock.type === this.state.filter)
   }

   if (this.state.sort ==="Alphabetically") {
     stocks = stocks.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
   } else if (this.state.sort ==="Price") {
     stocks = stocks.sort((stockA, stockB) => stockA.price - stockB.price)
   }

   return stocks
 }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocksObj => this.setState({
      stocks: stocksObj
    })
    )
  }

  render() {
    // console.log(this.state.stocks);
    return (
      <div>
        <SearchBar
          filterTerm={this.filterTerm}
          sortTerm={this.sortTerm}
          sort={this.state.sort}
          filter={this.state.filter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.renderStock()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                  portfolioStocks={this.state.portfolio}
                  removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
