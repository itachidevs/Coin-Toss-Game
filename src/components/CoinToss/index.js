import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    coinImage: HEADS_IMG_URL,
    total: 0,
    heads: 0,
    tails: 0,
  }

  tossTheCoin = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = heads
    let latestTailsCount = tails

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      coinImage: tossImage,
      heads: latestHeadsCount,
      tails: latestTailsCount,
    })
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {total, heads, tails, coinImage} = this.state

    return (
      <div className="container">
        <div className="cointoss-container">
          <h1 className="cointoss-container-heading">Coin Toss Game</h1>
          <p className="cointoss-container-description">Heads (or) Tails</p>
          <img className="coin-img" alt="toss result" src={coinImage} />
          <button className="btn" type="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
